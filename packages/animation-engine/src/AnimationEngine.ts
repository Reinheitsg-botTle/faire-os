import { Animator } from "./Animator";

export class AnimationEngine {

    animator = new Animator();

    getIdle(time: number) {
        return this.animator.idle.update(time);
    }

}
