import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Shape from "./shape.js";
import Square from "./square.js";

// Shorten getelebyid
const getEle = (id) => document.getElementById(id);

const renderUI = () => {
    const shape = new Shape();
    shape.draw();
}
renderUI();

getEle("areaSquare").onclick = () => {
    let side = Number(getEle("side").value);
    let x = Number(getEle("squareX").value);
    let y = Number(getEle("squareY").value);
    let color = getEle("squareColor").value;

    const square = new Square("vuong",x,y,color,side);

    square.getArea();
    square.draw();
}

getEle("areaRec").onclick = () => {
    let l = Number(getEle("recL").value);
    let w = Number(getEle("recW").value);
    let x = Number(getEle("recX").value);
    let y = Number(getEle("recY").value);
    let color = getEle("recColor").value;

    const rec = new Rectangle("chu nhat",x,y,color,l,w);

    rec.getArea();
    rec.draw();
}

getEle("areaCircle").onclick = () => {
    let radius = Number(getEle("radius").value);
    let x = Number(getEle("cirX").value);
    let y = Number(getEle("cirY").value);
    let color = getEle("cirColor").value;

    const circle = new Circle("tron",x,y,color,radius);

    circle.getArea();
    circle.draw();
}