var answer, buttonText;
var result = document.querySelector("#result");
var resultValue = "";
var buttons = document.querySelectorAll("button");
var buttonLength = document.querySelectorAll("button").length;
var degRadFeBtns = document.querySelectorAll(".deg_fe button");
var trigobtns = document.querySelectorAll(".trigo_function .trigoBtns .dropdown .dropdown-menu button");
var degButton = document.querySelector("#deg");
var radButton = document.querySelector("#rad");
var equalsBtn = document.querySelector(".equals");
var memorySave;

//for radian to degree conversion
function degFunction() {
    return resultValue * (Math.PI / 180);

}

//for parenthesis loop hole:invalid syntax
let brackets;
let openingBracket = document.querySelector(".open_parenthesis");
let closingBracket = document.querySelector(".closing_parenthesis");
openingBracket.addEventListener("click", () => {
    brackets++;
})
closingBracket.addEventListener("click", () => {
    brackets--;
})

//Event listeners and evaluation for all the buttons
for (var i = 0; i < buttonLength; i++) {
    buttons[i].addEventListener("click", function(event) {
        buttonText = event.target.textContent;
        switch (buttonText) {
            case "=":
                if (brackets != 0) {
                    result.value = "Invalid Syntax";
                }
                result.value = eval(resultValue);
                break;
            case "mod":
                buttonText = "%";
                resultValue += buttonText;
                result.value = resultValue;
                break;
            case "÷":
                buttonText = "/";
                resultValue += buttonText;
                result.value = resultValue;
                break;

            case "1/x":
                buttonText = "1/";
                resultValue += buttonText;
                result.value = resultValue;
                break;

            case "|x|":
                resultValue = Math.abs(resultValue);
                result.value = resultValue;
                break;
            case "ln":
                resultValue = Math.log(resultValue);
                result.value = resultValue;
                break;

            case "log":
                resultValue = Math.log10(resultValue);
                result.value = resultValue;
                break;

            case "Floor":
                resultValue = Math.floor(resultValue);
                result.value = resultValue;
                break;

            case "Ceiling":
                resultValue = Math.ceil(resultValue);
                result.value = resultValue;
                break;

            case "Round":
                resultValue = Math.round(resultValue);
                result.value = resultValue;
                break;

            case "Sign":
                resultValue = Math.sign(resultValue);
                result.value = resultValue;
                break;

            case "Truncate":
                resultValue = Math.trunc(resultValue);
                result.value = resultValue;
                break;

            case "10x":
                resultValue = Math.pow(10, resultValue);
                result.value = resultValue;
                break;

            case "x2":
                resultValue = Math.pow(resultValue, 2);
                result.value = resultValue;
                break;

            case "+/-":
                if (Math.sign(resultValue) == 1) {
                    tempValueForPlus = Math.abs(resultValue);
                    resultValue = "-" + tempValueForPlus;
                    result.value = resultValue;
                } else if (Math.sign(resultValue) == -1) {
                    tempValue = Math.abs(resultValue);
                    resultValue = "+" + tempValue;
                    result.value = resultValue;
                }
                break;

            case "sin":
                if (degButton.checked) {
                    deg = degFunction();
                    resultValue = Math.sin(deg);
                    result.value = resultValue;
                }
                if (radButton.checked) {
                    resultValue = Math.sin(resultValue);
                    result.value = resultValue;
                }
                break;
            case "cos":
                if (degButton.checked) {
                    deg = degFunction();
                    resultValue = Math.cos(deg);
                    result.value = resultValue;
                }
                if (radButton.checked) {
                    resultValue = Math.cos(resultValue);
                    result.value = resultValue;
                }
                break;
            case "tan":
                if (degButton.checked) {
                    deg = degFunction();
                    resultValue = Math.tan(deg);
                    result.value = resultValue;
                }
                if (radButton.checked) {
                    resultValue = Math.tan(resultValue);
                    result.value = resultValue;
                }
                break;
            case "asin":
                if (degButton.checked) {

                    resultValue = Math.asin(resultValue) * 180 / Math.PI;
                    result.value = resultValue;
                }
                if (radButton.checked) {
                    resultValue = Math.asin(resultValue);
                    result.value = resultValue;
                }
                break;
            case "acos":
                if (degButton.checked) {

                    resultValue = Math.acos(resultValue) * 180 / Math.PI;
                    result.value = resultValue;
                }
                if (radButton.checked) {
                    resultValue = Math.acos(resultValue);
                    result.value = resultValue;
                }
                break;
            case "atan":
                if (degButton.checked) {

                    resultValue = Math.atan(resultValue) * 180 / Math.PI;
                    result.value = resultValue;
                }
                if (radButton.checked) {
                    resultValue = Math.atan(resultValue);
                    result.value = resultValue;
                }
                break;
            case "MS":
                memorySave = resultValue;
                break;

            case "M+":
                resultValue = parseInt(resultValue) + parseInt(memorySave);
                result.value = resultValue;
                break;

            case "M-":
                resultValue = parseInt(resultValue) - parseInt(memorySave);
                result.value = resultValue;
                break;

            case "MR":
                resultValue = memorySave;
                result.value = resultValue;
                break;

            case "MC":
                memorySave = "";
                resultValue = memorySave;
                result.value = resultValue;
                break;

            case "exp":
                resultValue = Math.exp(resultValue);
                result.value = resultValue;
                break;

            case "π":
                if (result.value == "0") {
                    resultValue = Math.PI;
                    result.value = resultValue;
                } else {
                    result.value = Math.PI * resultValue;
                }
                break;

            case "e":
                if (result.value == "0") {
                    resultValue = Math.E;
                    result.value = resultValue;
                } else {
                    result.value = Math.E * resultValue;
                }
                break;

            case "xy":
                let xValue = parseInt(resultValue.slice(0, 1));
                let yValue = parseInt(resultValue.slice(1, 3));
                resultValue = Math.pow(xValue, yValue);
                result.value = resultValue;
                break;

            case "exp":
                let baseValue = parseInt(resultValue.slice(0, 1));
                let expValue = parseInt(resultValue.slice(1, 3));
                resultValue = Math.exp(baseValue, expValue);
                result.value = resultValue;
                break;

            case "√":
                result.value = Math.sqrt(resultValue);
                break;

            case "F-E":
                resultValue = parseFloat(resultValue).toExponential();
                result.value = resultValue;
                break;

            case "n!":
                function factorial(resultValue) {
                    if (resultValue == 0 || resultValue == 1) {
                        return 1;
                    } else {
                        return resultValue * factorial(resultValue - 1);
                    }
                }
                resultValue = factorial(resultValue);
                buttonText = "!";
                resultValue += buttonText;
                result.value = resultValue;
                break;

            case "C":
                resultValue = "";
                result.value = 0;
                break;

            case "←":
                resultValue = resultValue.slice(0, -1);
                result.value = resultValue;
                break;

            default:
                resultValue += buttonText;
                result.value = resultValue;
        }
    })
}
if (result.value == "") {
    result.value = 0;

}