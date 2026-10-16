export interface SaturnSh2Image {
  kind: "ip" | "program";
  baddr: number;
  entry: number;
  entryName: string;
}

export function locateSaturnSh2(bytes: Uint8Array | null | undefined): SaturnSh2Image | null;
export function saturnR2ArchArgs(image: SaturnSh2Image | null): string[];
export function saturnR2AnalyzeCommand(image: SaturnSh2Image | null): string;
