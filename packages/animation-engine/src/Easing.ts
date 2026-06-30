export const easeInOut = (t: number): number => {
    return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
};

export const easeOut = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
};

export const linear = (t: number): number => t;
