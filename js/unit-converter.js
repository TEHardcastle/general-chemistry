"use strict"

document.getElementById("buttonCalculateMass").onclick = calculateMass;
document.getElementById("buttonCalculateLength").onclick = calculateLength;

function calculateMass(){
    let inputMass = document.getElementById("inputMassValue").value;
    let inputMassUnit = document.getElementById("selectMassUnit").value;
    let outputMass = 0;
    if (!isNaN(inputMass)) {
        outputMass = inputMass*inputMassUnit;
    }
    document.getElementById("outputMassValue").value = outputMass.toFixed(5);
}

function calculateLength(){
    let inputLength = document.getElementById("inputLengthValue").value;
    let inputLengthUnit = document.getElementById("selectLengthUnit").value;
    let outputLength = 0;
    if (!isNaN(inputLength)) {
        outputLength = inputLength*inputLengthUnit;
    }
    document.getElementById("outputLengthValue").value = outputLength;
}
