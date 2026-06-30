import { Spring } from "./Springs";

export class Bounce {

    private spring = new Spring();

    animate(
        current: number,
        target: number,
        velocity: number,
        dt: number
    ) {
        return this.spring.update(
            current,
            target,
            velocity,
            dt
        );
    }

}
