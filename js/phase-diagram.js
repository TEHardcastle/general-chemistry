"use strict"
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// Draw the box
ctx.beginPath();
ctx.lineWidth = "4";
ctx.rect(50, 50, 400, 400);
ctx.stroke();
// Add the phase lines
let triplePoint = [200,300];
ctx.beginPath();
ctx.moveTo(50, 450);
ctx.lineTo(triplePoint[0], triplePoint[1]);
ctx.moveTo(triplePoint[0], triplePoint[1]);
ctx.lineTo(300,50);
ctx.moveTo(triplePoint[0], triplePoint[1]);
ctx.lineTo(450,150);
ctx.stroke();
// add y-axis numbers
ctx.font = '10px serif';
ctx.fillText( '0.00',  25, 450 );
ctx.fillText( '0.25',  25, 400 );
ctx.fillText( '0.50',  25, 350 );
ctx.fillText( '0.75',  25, 300 );
ctx.fillText( '1.00',  25, 250 );
ctx.fillText( '1.25',  25, 200 );
ctx.fillText( '1.50',  25, 150 );
ctx.fillText( '1.75',  25, 100 );
ctx.fillText( '2.00',  25, 50  );
// add x-axis numbers
ctx.font = '10px serif';
ctx.fillText( ' 0',  50, 463 );
ctx.fillText( '10', 100, 463 );
ctx.fillText( '20', 150, 463 );
ctx.fillText( '30', 200, 463 );
ctx.fillText( '40', 250, 463 );
ctx.fillText( '50', 300, 463 );
ctx.fillText( '60', 350, 463 );
ctx.fillText( '70', 400, 463 );
ctx.fillText( '80', 450, 463 );
// Add axis labels
ctx.fillStyle = "#000000";
ctx.font = '20px serif';
ctx.fillText('Temperature', 170, 490);
ctx.rotate(Math.PI/2);
ctx.fillText('Pressure',200,-8);
// Add phase labels
ctx.font = '16px serif';
ctx.rotate(-Math.PI/2);
ctx.fillText('Liquid', 100, 100);
ctx.fillText('Gas', 350, 100);
ctx.fillText('Solid', 250, 420);
