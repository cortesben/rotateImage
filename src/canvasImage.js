export class Image {
    constructor(canvas, context, element, src) {
        this.canvas = canvas;
        this.context = context;
        this.element = element;
        this.element.src = src;
        this.init();
    }

    init() {
        this.element.addEventListener('load', e => console.log(e));
        this.element.onload = (e) => {
            console.log(e)
            const canvasWidth = (this.canvas.width / 2);
            const elementWidth = (this.element.width / 2);
            const canvasHeight = (this.canvas.height / 2);
            const elementHeight = (this.element.height / 2);
            this.context.drawImage(this.element, canvasWidth - elementWidth, canvasHeight - elementHeight);
        }
    }

}
