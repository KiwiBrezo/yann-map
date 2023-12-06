export class ViewContainer {

    canvas;
    canvas2DContext;

    constructor(canvasId) {
        this.canvas = document.querySelector(`#${canvasId}`);

        if (this.canvas == null) {
            console.error(`There is no element with id '${canvasId}'`);
            return;
        }

        this.canvas2DContext = this.canvas.getContext("2d");
    }

    drawImage(imageUrl, offsetX, offsetY, width = this.canvas.width, height = this.canvas.height) {
        const image = new Image();

        image.onload = () => {
            this.canvas2DContext.drawImage(image, offsetX, offsetY, width, height);
        };

        image.src = imageUrl;
    }
}