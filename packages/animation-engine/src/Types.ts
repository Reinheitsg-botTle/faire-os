export interface Vector2 {
    x: number;
    y: number;
}

export interface Velocity {
    x: number;
    y: number;
}

export interface AnimationState {
    position: Vector2;
    velocity: Velocity;
    scale: number;
    rotation: number;
    opacity: number;
}

export interface AnimationFrame {
    state: AnimationState;
    timestamp: number;
}
