import Shape from "./shape.js";

export default class Square extends Shape {
    constructor(name,sizeX,sizeY, background, side) {
        // State inherited attributes
        super(name,sizeX,sizeY, background);
        // State new attributes
        this.side = side;
    }
 
    getArea() {
        this.area = Math.pow(this.side, 2);
    }

    draw() {
        const content =`<div class="alert" style="width:${this.sizeX}rem; height:${this.sizeY}rem; background-color:${this.background};">Dien tich hinh ${this.name} - area ${this.area}</div>`;
        document.getElementById("main").innerHTML = content;
    }
};