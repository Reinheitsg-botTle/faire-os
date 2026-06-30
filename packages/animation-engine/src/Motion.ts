export class Motion {

    lerp(a: number, b: number, t: number) {
        return a + (b - a) * t;
    }

    clamp(
        value: number,
        min: number,
        max: number
    ) {
        return Math.max(min, Math.min(max, value));
    }

}

