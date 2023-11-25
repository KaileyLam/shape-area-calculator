export default class Shape {
    // General attributes 
    constructor(name,sizeX,sizeY, background) {
        this.name = name;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.background = background;
        this.area = 0;
    }
    
// method 1: calc area
    getArea() {
        this.area = 0;
    }

// method 2: draw area
    draw() {
        const content =`<div class = "alert alert-primary">Chua co ket qua</div>`;
        document.getElementById("main").innerHTML = content;
    }
};