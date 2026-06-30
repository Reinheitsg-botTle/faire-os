import { Orbit } from "./Orbit";

export class Idle {

    orbit = new Orbit();

    update(time: number) {

        const offset =
            this.orbit.update(10, 0.5, time);

        return {

            x: offset.x,

            y: offset.y,

            scale:
                1 +
                Math.sin(time * 2) *
                0.03

        };

    }

}
