const defaultResult = 0;
let currentResult = defaultResult;
let entriesHistory = []; // array of calculus historic


//functions

function getInputNumber() {
    return Number(userInput.value);
} //return the input value


function writeOutput(beforeCalculation, operator, enteredNumber) {
    const calculationDescription = `${beforeCalculation} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calculationDescription); // from de vendor.js
} // output-data 


function generateLogs(operator, data1, data2, data3) {
    const logEntries = {
        operation: operator,
        number: data1,
        prevResult: data2,
        curResult: data3
    };

    entriesHistory.push(logEntries);
    console.log(entriesHistory);   
} /* a function that generates a full log of the operations MADE
    TO DO: display this at the user interface */


function calculationMode(mode) {

    if (mode !== 'addition' && 
        mode !== 'subtraction' && 
        mode !== 'multiplication' && 
        mode !== 'division') {
        return;
    } // interrupts the exec of this function if condition don´t match

    const numberInput = getInputNumber();
    const initialResult = currentResult;
    let calculationSign;

    if (mode === 'addition') {
        currentResult += numberInput;
        calculationSign = '+';
    } else if (mode === 'subtraction') {
        currentResult -= numberInput;
        calculationSign = '-';
    } else if (mode === 'multiplication') {
        currentResult *= numberInput;
        calculationSign = 'x';
    } else if (mode === 'division') {
        currentResult /= numberInput;
        calculationSign = '/';
    }

    writeOutput(initialResult, calculationSign, numberInput);
    generateLogs(mode, numberInput, initialResult, currentResult);
} // which operation executes


/*
************************************************************
FUNCTIONS CALL :: ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION
************************************************************
*/

function add() {
    calculationMode('addition');
}
function subtract() {
    calculationMode('subtraction');
}
function multiply() {
    calculationMode('multiplication');
}
function divide() {
    calculationMode('division');
}

/*
************************************************************
    EVENTS BUTTONS
************************************************************
*/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);