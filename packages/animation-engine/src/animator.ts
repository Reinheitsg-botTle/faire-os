import { Idle } from "./Idle";
import { Bounce } from "./Bounce";
import { Follow } from "./Follow";

export class Animator {

    idle = new Idle();

    bounce = new Bounce();

    follow = new Follow();

}
