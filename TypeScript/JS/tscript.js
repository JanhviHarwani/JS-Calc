"use strict";
var buttonText, tempVarTrigo;
var result = document.querySelector("#result");
var resultToShow = document.querySelector(".result");
var resultValue = "";
var buttons = document.querySelectorAll("button");
var buttonLength = document.querySelectorAll("button").length;
var degButton = document.querySelector(".deg");
var radButton = document.querySelector(".rad");
var memorySave;
//for radian to degree conversion
function degFunction() {
    return +resultValue * (Math.PI / 180);
}
//for parenthesis loop hole:invalid syntax
let brackets;
let openingBracket = document.querySelector(".open_parenthesis");
let closingBracket = document.querySelector(".closing_parenthesis");
openingBracket.addEventListener("click", () => {
    brackets++;
});
closingBracket.addEventListener("click", () => {
    brackets--;
});
//Event listeners and evaluation for all the buttons
for (var i = 0; i < buttonLength; i++) {
    buttons[i].addEventListener("click", function (event) {
        buttonText = event.target.textContent;
        switch (buttonText) {
            case "=":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    if (brackets !== 0) {
                        result.value = "Invalid Syntax";
                    }
                    result.value = eval(resultValue.toString());
                }
                break;
            case "mod":
                buttonText = "%";
                resultValue += buttonText;
                break;
            case "÷":
                buttonText = "/";
                resultValue += buttonText;
                break;
            case "1/x":
                buttonText = "1/";
                resultValue += buttonText;
                result.value = resultValue.toString();
                break;
            case "|x|":
                resultValue = Math.abs(+resultValue);
                result.value = resultValue.toString();
                break;
            case "ln":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.log(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "log":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.log10(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "Floor":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.floor(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "Ceiling":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.ceil(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "Round":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.round(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "Sign":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.sign(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "Truncate":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = Math.trunc(+resultValue);
                    result.value = resultValue.toString();
                }
                break;
            case "10x":
                let tempVarForTenRaised;
                tempVarForTenRaised = resultValue;
                resultValue = Math.pow(10, +resultValue);
                resultToShow.value = "10^" + tempVarForTenRaised;
                break;
            case "x2":
                let tempVarForSquare;
                tempVarForSquare = resultValue;
                resultValue = Math.pow(+resultValue, 2);
                resultToShow.value = tempVarForSquare + "^2";
                break;
            case "+/-":
                if (Math.sign(+resultValue) == 1) {
                    const tempValueForPlus = Math.abs(+resultValue);
                    resultValue = "-" + tempValueForPlus;
                    result.value = resultValue;
                }
                else if (Math.sign(+resultValue) == -1) {
                    const tempValue = Math.abs(+resultValue);
                    resultValue = "+" + tempValue;
                    result.value = resultValue;
                }
                break;
            case "sin":
                tempVarTrigo = resultValue;
                if (degButton.classList.contains('radiobtnselected')) {
                    var deg = degFunction();
                    resultToShow.value = "sin(" + tempVarTrigo + ")°";
                    resultValue = Math.sin(deg);
                }
                if (radButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "sin(" + tempVarTrigo + ")rad";
                    resultValue = Math.sin(+resultValue);
                }
                break;
            case "cos":
                tempVarTrigo = resultValue;
                if (degButton.classList.contains('radiobtnselected')) {
                    deg = degFunction();
                    resultToShow.value = "cos(" + tempVarTrigo + ")°";
                    resultValue = Math.cos(deg);
                }
                if (radButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "cos(" + tempVarTrigo + ")rad";
                    resultValue = Math.cos(+resultValue);
                }
                break;
            case "tan":
                tempVarTrigo = resultValue;
                if (degButton.classList.contains('radiobtnselected')) {
                    deg = degFunction();
                    resultToShow.value = "tan(" + tempVarTrigo + ")°";
                    resultValue = Math.tan(deg);
                }
                if (radButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "tan(" + tempVarTrigo + ")rad";
                    resultValue = Math.tan(+resultValue);
                }
                break;
            case "asin":
                tempVarTrigo = resultValue;
                if (degButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "asin(" + tempVarTrigo + ")°";
                    resultValue = Math.asin(+resultValue) * 180 / Math.PI;
                }
                if (radButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "asin(" + tempVarTrigo + ")rad";
                    resultValue = Math.asin(+resultValue);
                }
                break;
            case "acos":
                tempVarTrigo = resultValue;
                if (degButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "acos(" + tempVarTrigo + ")°";
                    resultValue = Math.acos(+resultValue) * 180 / Math.PI;
                }
                if (radButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "acos(" + tempVarTrigo + ")rad";
                    resultValue = Math.acos(+resultValue);
                }
                break;
            case "atan":
                tempVarTrigo = resultValue;
                if (degButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "atan(" + tempVarTrigo + ")°";
                    resultValue = Math.atan(+resultValue) * 180 / Math.PI;
                }
                if (radButton.classList.contains('radiobtnselected')) {
                    resultToShow.value = "atan(" + tempVarTrigo + ")rad";
                    resultValue = Math.atan(+resultValue);
                }
                break;
            case "MS":
                memorySave = +result.value;
                break;
            case "M+":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = (+resultValue) + (+memorySave);
                    result.value = resultValue.toString();
                }
                break;
            case "M-":
                resultValue = (+resultValue) - (+memorySave);
                result.value = resultValue.toString();
                break;
            case "MR":
                resultValue = memorySave;
                result.value = resultValue.toString();
                break;
            case "MC":
                memorySave = "";
                resultValue = memorySave;
                result.value = "0";
                break;
            case "exp":
                resultValue = Math.exp(+resultValue);
                result.value = resultValue.toString();
                break;
            case "π":
                if (result.value === "0") {
                    resultValue = Math.PI;
                    result.value = resultValue.toString();
                }
                else {
                    result.value = (Math.PI * +resultValue).toString();
                }
                break;
            case "e":
                if (result.value == "0") {
                    resultValue = Math.E;
                    result.value = resultValue.toString();
                }
                else {
                    result.value = (Math.E * +resultValue).toString();
                }
                break;
            case "xy":
                resultValue += '**';
                break;
            case "exp":
                resultValue = Math.exp(+resultValue);
                break;
            case "√":
                let tempVarForsqrt;
                tempVarForsqrt = resultValue;
                resultValue = Math.pow(+resultValue, 1 / 2);
                resultToShow.value = "√" + tempVarForsqrt;
                break;
            case "F-E":
                if (resultValue === "" || resultValue === 0) {
                    result.value = "Invalid Syntax";
                }
                else {
                    resultValue = (+resultValue).toExponential();
                    result.value = resultValue;
                }
                break;
            case "n!":
                resultValue = factorial(+resultValue);
                buttonText = "!";
                resultValue = resultValue.toString();
                resultValue += buttonText;
                result.value = resultValue;
                break;
            case "C":
                resultValue = "";
                result.value = (0).toString();
                break;
            case "←":
                resultValue = resultValue.slice(0, -1);
                result.value = resultValue;
                break;
            case "2nd":
                document.querySelector("button.xSquare").innerHTML = ' <div class="textAlignmentContainer">x<sup>3</sup></div>';
                document.querySelector("button.sqrt").innerHTML = ' <div class="textAlignmentContainer"><sup>3</sup>√</div>';
                document.querySelector("button.power").innerHTML = ' <div class="textAlignmentContainer">y√x</div>';
                document.querySelector("button.tenRaiseTo").innerHTML = ' <div class="textAlignmentContainer">2<sup>x</sup></div>';
                document.querySelector("button.log").innerHTML = ' <div class="textAlignmentContainer">log<sub>y</sub>x</div>';
                document.querySelector("button.naturalLog").innerHTML = ' <div class="textAlignmentContainer">e<sup>x</sup></div>';
                break;
            case "x3":
                let tempVarForCube;
                tempVarForCube = resultValue;
                resultValue = Math.pow(+resultValue, 3);
                resultToShow.value = tempVarForCube + "^3";
                break;
            case "3√":
                let tempVarForCubert;
                tempVarForCubert = resultValue;
                resultValue = Math.pow(+resultValue, 1 / 3);
                resultToShow.value = '3√' + tempVarForCubert;
                break;
            case "2x":
                let tempVarFor2Raised;
                tempVarFor2Raised = resultValue;
                resultValue = Math.pow(2, +resultValue);
                resultToShow.value = '2^' + tempVarFor2Raised;
                break;
            case "ex":
                let tempVarForERaised;
                tempVarForERaised = resultValue;
                resultValue = Math.exp(+resultValue);
                resultToShow.value = 'e^' + tempVarForERaised;
                break;
            case "y√x":
                resultToShow.value = resultValue.toString();
                resultValue += '**1/';
                break;
            case "logyx":
                let xValue = +resultValue.toString().slice(0, 1);
                let yValue = +resultValue.toString().slice(1, 3);
                resultToShow.value = 'log(' + xValue + ',' + yValue + ')';
                resultValue = getBaseLog(xValue, yValue);
                break;
            default:
                resultValue += buttonText.toString();
                result.value = resultValue.toString();
        }
    });
}
function getBaseLog(x, y) {
    return Math.log(x) / Math.log(y);
}
function factorial(resultValue) {
    if (resultValue == 0 || resultValue == 1) {
        return 1;
    }
    else {
        return resultValue * factorial(resultValue - 1);
    }
}
if (result.value === "") {
    result.value = (0).toString();
}
/* Deg Rad button toggle js */
function SwitchButtons(buttonId) {
    var hideBtn, showBtn;
    if (buttonId == 'deg') {
        degButton.classList.add("radiobtnselected");
        showBtn = 'rad';
        hideBtn = 'deg';
    }
    else {
        radButton.classList.add("radiobtnselected");
        showBtn = 'deg';
        hideBtn = 'rad';
    }
    document.getElementById(hideBtn).style.display = 'none';
    document.getElementById(showBtn).style.display = '';
}
//# sourceMappingURL=tscript.js.map