// Promise-based wrapper around the decompiler worker. Hides the
// request/reply id correlation so the rest of the app can write
// `await client.decompile(addr)` instead of book-keeping.

import type {
  WorkerRequest,
  WorkerReply,
  Region,
  Hex,
} from "./types";

type Pending = { resolve: (v: WorkerReply) => void; reject: (e: Error) => void };

export class DecompilerClient {
  private worker: Worker;
  private nextId = 1;
  private pending = new Map<number, Pending>();

  constructor(workerUrl: string) {
    this.worker = new Worker(workerUrl, {
      type: "module",
      name: "pyre-decompiler",
    });
    this.worker.addEventListener("message", (ev: MessageEvent<WorkerReply>) => {
      const p = this.pending.get(ev.data.id);
      if (!p) return;
      this.pending.delete(ev.data.id);
      if (ev.data.ok) p.resolve(ev.data);
      else p.reject(new Error(ev.data.error));
    });
    this.worker.addEventListener("error", (ev) => {
      const err = new Error(ev.message || "worker crashed");
      // Reject every pending request so callers don't hang. Future
      // calls will hit the same fate until the page reloads.
      for (const p of this.pending.values()) p.reject(err);
      this.pending.clear();
    });
  }

  // The cmd param is the discriminator and `args` is everything else
  // for that variant. Splitting them keeps TS narrowing happy without
  // forcing a discriminated-union match on every call site.
  private send<R extends WorkerReply & { ok: true }>(
    msg: { cmd: WorkerRequest["cmd"] } & Record<string, unknown>,
  ): Promise<R> {
    const id = this.nextId++;
    return new Promise<R>((resolve, reject) => {
      this.pending.set(id, {
        resolve: (v) => resolve(v as R),
        reject,
      });
      this.worker.postMessage({ ...msg, id });
    });
  }

  async init(opts: {
    specBaseUrl: string;
    manifestUrl: string;
    arch: string;
  }): Promise<void> {
    await this.send({ cmd: "init", ...opts });
  }

  async open(opts: {
    languageId: string;
    regions: Region[];
    symbols: [Hex, string][];
    readonly: [Hex, Hex][];
    strings: [Hex, number][];
  }): Promise<DecompilerSession> {
    const reply = await this.send<{ id: number; ok: true; sessionId: number }>({
      cmd: "open",
      ...opts,
    });
    return new DecompilerSession(this, reply.sessionId);
  }

  async decompileSession(
    sessionId: number,
    address: Hex,
    name?: string,
  ): Promise<string> {
    const reply = await this.send<{ id: number; ok: true; code: string }>({
      cmd: "decompile",
      sessionId,
      address,
      name,
    });
    return reply.code;
  }

  async closeSession(sessionId: number): Promise<void> {
    await this.send({ cmd: "close", sessionId });
  }

  terminate() {
    this.worker.terminate();
    for (const p of this.pending.values())
      p.reject(new Error("client terminated"));
    this.pending.clear();
  }
}

export class DecompilerSession {
  private closed = false;
  constructor(
    private client: DecompilerClient,
    public readonly sessionId: number,
  ) {}

  decompile(address: Hex, name?: string): Promise<string> {
    if (this.closed) throw new Error("session closed");
    return this.client.decompileSession(this.sessionId, address, name);
  }

  async close() {
    if (this.closed) return;
    this.closed = true;
    await this.client.closeSession(this.sessionId);
  }
}
