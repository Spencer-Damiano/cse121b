/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const result = num1 + num2;
    document.getElementById('sum').value = result;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    const result = num1 - num2;
    document.getElementById('difference').value = result;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    const result = num1 * num2;
    document.getElementById('product').value = result;
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divideNumbers() {
    const num1 = parseFloat(document.getElementById('dividend').value);
    const num2 = parseFloat(document.getElementById('divisor').value);
    let result;
    if (num2 === 0) {
        result = 'Cannot divide by zero';
    } else {
        result = num1 / num2;
    }
    document.getElementById('quotient').value = result;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById('array').textContent = numArray;

/* Output Odds Only Array */
document.getElementById('odds').textContent = numArray.filter(num => num % 2 !== 0);

/* Output Evens Only Array */
document.getElementById('evens').textContent = numArray.filter(num => num % 2 === 0);

/* Output Sum of Org. Array */
let ttlSum = numArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').textContent = ttlSum;

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numArray.map(num => num * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').textContent = ttlSum * 2;
