import { Position } from "./types";

export class OrbWindow {
  private position: Position = { x: 40, y: 40 };

  move(x: number, y: number) {
    this.position = { x, y };
  }

  getPosition(): Position {
    return this.position;
  }
}

