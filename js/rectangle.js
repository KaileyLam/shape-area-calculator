import Shape from "./shape.js";

export default class Rectangle extends Shape{
    constructor(name,sizeX,sizeY,background,sideL,sideW) {
        super(name,sizeX,sizeY, background);
        this.sideL = sideL;  
        this.sideW = sideW;  
    }
 
    getArea() {
        this.area = this.sideL*this.sideW;
    }

    draw() {
        const content =`<div class="alert" style="width:${this.sizeX}rem; height:${this.sizeY}rem; background-color:${this.background};">Dien tich hinh ${this.name} - area ${this.area}</div>`;
        document.getElementById("main").innerHTML = content;
    }
}