export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export enum OrbState {
  Hidden = "hidden",
  Idle = "idle",
  Expanded = "expanded",
}
