"use strict"

document.getElementById("buttonCalculateMass").onclick = calculateMass;
document.getElementById("buttonCalculateLength").onclick = calculateLength;
document.getElementById("buttonCalculateTime").onclick = calculateTime;
document.getElementById("buttonCalculateTemperature").onclick = calculateTemperature;


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

function calculateTemperature(){
    let inputTemperature = document.getElementById("inputTemperatureValue").value;
    let inputTemperatureUnit = document.getElementById("selectTemperatureUnit").value;
    let outputTemperature = 0;
    if (!isNaN(inputTemperature)) {
        if (inputTemperatureUnit == "C") {
            outputTemperature = parseFloat(inputTemperature) + 273.15;
        } else if (inputTemperatureUnit == "F") {
            outputTemperature = (parseFloat(inputTemperature) - 32) * (5/9) + 273.15;
        }
    }
    document.getElementById("outputTemperatureValue").value = outputTemperature.toPrecision(5);
}
