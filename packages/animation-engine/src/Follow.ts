export class Follow {

    update(
        currentX: number,
        currentY: number,
        mouseX: number,
        mouseY: number
    ) {

        return {

            x:
                currentX +
                (mouseX - currentX) * .08,

            y:
                currentY +
                (mouseY - currentY) * .08

        };

    }

}
