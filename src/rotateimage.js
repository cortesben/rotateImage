export class RotateImage {
    constructor() {
        this.canvas = document.getElementById('rotate');
        this.context = this.canvas.getContext('2d');
        this.imageObject = new Image();
    }

}
