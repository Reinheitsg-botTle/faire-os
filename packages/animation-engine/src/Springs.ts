export class Spring {

    constructor(
        public stiffness = 140,
        public damping = 16
    ) {}

    update(
        position: number,
        target: number,
        velocity: number,
        dt: number
    ) {

        const force =
            (target - position) * this.stiffness;

        velocity += force * dt;

        velocity *= Math.exp(-this.damping * dt);

        position += velocity * dt;

        return {
            position,
            velocity
        };
    }

}
