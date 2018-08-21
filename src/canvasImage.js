export class Image {
    constructor(canvas, context, element, src) {
        this.canvas = canvas;
        this.context = context;
        this.element = element;
        this.element.src = src;

        this.init();
    }

    init() {
        this.element.onload = e => {
            console.log(e);
            this.context.drawImage(this.element, 1000, 2000)
        }
    }

}
