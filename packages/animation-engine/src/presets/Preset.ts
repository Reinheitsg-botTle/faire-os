export interface AnimationPreset {

    name: string;

    orbitRadius: number;

    orbitSpeed: number;

    breathingScale: number;

    breathingSpeed: number;

    opacity: number;

    rotationSpeed: number;

    followStrength: number;

    spring: {

        stiffness: number;

        damping: number;

    };

}
