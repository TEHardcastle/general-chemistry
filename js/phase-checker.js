"use strict"

document.getElementById("buttonDrawDiagram").onclick = redrawDiagram;

function redrawDiagram(){
    let in_x = document.getElementById("inputTriplePointTemp").value;
    let in_y = document.getElementById("inputTriplePointPressure").value;
    let new_y;
    let new_x;
    if (in_x < 0){
        new_x = 45;
    }
    else if (in_x > 99){
        new_x = 495;
    }
    else {
        new_x = 45 + (parseFloat(in_x)*4.55);
    }
    document.getElementById("lineSection1").setAttribute('x2', new_x);
    document.getElementById("lineSection2").setAttribute('x1', new_x);
    document.getElementById("lineSection3").setAttribute('x1', new_x);

    if (in_y < 0){
        new_y = 455;
    }
    else if (in_y > 1.98){
        new_y = 5;
    }
    else {
        new_y = 455 - (parseFloat(in_y)*227.5);
    }
    document.getElementById("lineSection1").setAttribute('y2', new_y);
    document.getElementById("lineSection2").setAttribute('y1', new_y);
    document.getElementById("lineSection3").setAttribute('y1', new_y);
}
