// Shared types between the worker, the client, and the binary parsers.
// Kept in one file so the worker can import them without dragging in
// React/UI deps.

export type Hex = bigint;

export interface Region {
  vaddr: Hex;
  bytes: Uint8Array;
}

export interface FunctionEntry {
  addr: Hex;
  name: string;
  size?: number;
}

export interface ParsedBinary {
  format: "elf" | "macho" | "pe" | "wasm";
  arch: string;
  languageId: string;
  regions: Region[];
  symbols: [Hex, string][];
  strings: [Hex, number][];
  readonly: [Hex, Hex][];
  entryPoint?: Hex;
  functions: FunctionEntry[];
  /** PE only: preferred load address for RVA-style FUN_ names. */
  imageBase?: Hex;
}

// Worker request / reply messages. Discriminated by `cmd`. Every
// request carries a numeric `id` the worker echoes back so the client
// can correlate responses.

export type WorkerRequest =
  | InitRequest
  | OpenRequest
  | DecompileRequest
  | CloseRequest;

export interface InitRequest {
  id: number;
  cmd: "init";
  specBaseUrl: string;
  manifestUrl: string;
  arch: string;
}

export interface OpenRequest {
  id: number;
  cmd: "open";
  languageId: string;
  regions: Region[];
  symbols: [Hex, string][];
  readonly: [Hex, Hex][];
  strings: [Hex, number][];
}

export interface DecompileRequest {
  id: number;
  cmd: "decompile";
  sessionId: number;
  address: Hex;
  name?: string;
}

export interface CloseRequest {
  id: number;
  cmd: "close";
  sessionId: number;
}

export type WorkerReply =
  | { id: number; ok: true; sessionId?: number; code?: string }
  | { id: number; ok: false; error: string };
