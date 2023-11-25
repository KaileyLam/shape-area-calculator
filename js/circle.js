import Shape from "./shape.js";

export default class Circle extends Shape {
    constructor(name,sizeX,sizeY,background,radius) {
        super(name,sizeX,sizeY, background);
        this.radius = radius;
    }
 
    getArea() {
        this.area = Math.round(Math.PI * Math.pow(this.radius,2) * 100)/100;
    }

    draw() {
        const content =`<div class="alert" style="width:${this.sizeX}rem; height:${this.sizeY}rem; background-color:${this.background}; border-radius:50%">Dien tich hinh ${this.name} - area ${this.area}</div>`;
        document.getElementById("main").innerHTML = content;
    }
}