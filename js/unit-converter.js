"use strict"

document.getElementById("buttonCalculateMass").onclick = calculateMass;
document.getElementById("buttonCalculateLength").onclick = calculateLength;
document.getElementById("buttonCalculateTime").onclick = calculateTime;

function calculateMass(){
    let inputMass = document.getElementById("inputMassValue").value;
    let inputMassUnit = document.getElementById("selectMassUnit").value;
    let outputMass = 0;
    if (!isNaN(inputMass)) {
        outputMass = inputMass*inputMassUnit;
    }
    document.getElementById("outputMassValue").value = outputMass.toPrecision(5);
}

function calculateLength(){
    let inputLength = document.getElementById("inputLengthValue").value;
    let inputLengthUnit = document.getElementById("selectLengthUnit").value;
    let outputLength = 0;
    if (!isNaN(inputLength)) {
        outputLength = inputLength*inputLengthUnit;
    }
    document.getElementById("outputLengthValue").value = outputLength.toPrecision(5);
}

function calculateTime(){
    let inputTime = document.getElementById("inputTimeValue").value;
    let inputTimeUnit = document.getElementById("selectTimeUnit").value;
    let outputTime = 0;
    if (!isNaN(inputTime)) {
        outputTime = inputTime*inputTimeUnit;
    }
    document.getElementById("outputTimeValue").value = outputTime.toPrecision(5);
}
