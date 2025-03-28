// SOME VARIABLES
const OPERATORS = ["+", "-", "*", "/"];
const POWER = "POWER(", FACTORIAL = "FACTORIAL";

// CALCULATOR BUTTONS
let calculator_buttons = [
    {
        name: "square-root",
        symbol: "√",
        formula: "Math.sqrt",
        type: "math_function"
    },
    {
        name: "square",
        symbol: "x²",
        formula: "POWER",
        type: "math_function"
    },
    {
        name: "open-parenthesis",
        symbol: "(",
        formula: "(",
        type: "number"
    },
    {
        name: "close-parenthesis",
        symbol: ")",
        formula: ")",
        type: "number"
    },
    {
        name: "clear",
        symbol: "CE",
        formula: false,
        type: "key"
    },
    {
        name: "delete",
        symbol: "C",
        formula: false,
        type: "key"
    },
    {
        name: "pi",
        symbol: "π",
        formula: "Math.PI",
        type: "number"
    },
    {
        name: "cos",
        symbol: "cos",
        formula: "trigo(Math.cos,",
        type: "trigo_function"
    }, {
        name: "sin",
        symbol: "sin",
        formula: "trigo(Math.sin,",
        type: "trigo_function"
    }, {
        name: "tan",
        symbol: "tan",
        formula: "trigo(Math.tan,",
        type: "trigo_function"
    }, {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number"
    }, {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number"
    }, {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number"
    },
    {
        name: "division",
        symbol: "÷",
        formula: "/",
        type: "operator"
    },
    {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number"
    },
    {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number"
    },
    {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number"
    },
    {
        name: "multiplication",
        symbol: "×",
        formula: "*",
        type: "operator"
    },

    {
        name: "exp",
        symbol: "exp",
        formula: "Math.exp",
        type: "math_function"
    },
    {
        name: "ln",
        symbol: "ln",
        formula: "Math.log",
        type: "math_function"
    },
    {
        name: "log",
        symbol: "log",
        formula: "Math.log10",
        type: "math_function"
    },
    {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number"
    },
    {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number"
    },
    {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number"
    },
    {
        name: "subtraction",
        symbol: "–",
        formula: "-",
        type: "operator"
    },
    {
        name: "power",
        symbol: "x<span>y</span>",
        formula: POWER,
        type: "math_function"
    },
    {
        name: "ANS",
        symbol: "ANS",
        formula: "ans",
        type: "number"
    },
    {
        name: "percent",
        symbol: "%",
        formula: "/100",
        type: "number"
    },
    {
        name: "comma",
        symbol: ".",
        formula: ".",
        type: "number"
    },
    {
        name: "0",
        symbol: 0,
        formula: 0,
        type: "number"
    },
    {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate"
    },
    {
        name: "addition",
        symbol: "+",
        formula: "+",
        type: "operator"
    },
    {
        name: "factorial",
        symbol: "×!",
        formula: FACTORIAL,
        type: "math_function"
    }
];


// SELECT ELEMENT
const input_element = document.querySelectorAll('.btn');
const output_operation_element = document.querySelector('.input');
const output_result_element = document.querySelector('.answer');



let data = {
    operations: [],
    formula: []
}

const buttonsArray = Array.from(input_element);


// CLICK EVENT LISTENER
buttonsArray.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        const target_btn = event.target;
        console.log(target_btn.value);

        calculator_buttons.forEach(button => {
            if (button.name == target_btn.value) {
                calculate(button);
            }
        })

    })
})

// CALCULATOR

function calculate(button) {
    console.log(button);

    if (button.type == "operator") {  // +, -, /, *
        data.operations.push(button.symbol);
        data.formula.push(button.formula);
    }
    else if (button.type == "number") {  // 1 2 3 4 5 6 7 8 9
        data.operations.push(button.symbol);
        data.formula.push(button.formula);
    }
    else if (button.type == "math_function") {  // factorial, Power, log
        data.operations.push(button.symbol);
        data.formula.push(button.formula);
    }
    else if (button.type == "trigo_function") {  // sin, cos, tan
        data.operations.push(button.symbol);
        data.formula.push(button.formula);
    }
    else if (button.type == "key") {
        // clear equation
        if (button.name == "clear") {
            data.operations = [];
            data.formula = [];
        }
        else if (button.name == "delete") {
            data.operations.pop();
            data.formula.pop();
        }
    }
    else if (button.type == "calculate") {
        // calculate final answer
        formula_str = data.formula.join('');

        let result = eval(formula_str);

        //display equal sign
        const divText = document.querySelector('.equal-sign');
        divText.style.visibility = "visible";
        divText.style.opacity = "1";

        updateOutputResult(result);

    }

    console.log(data.operations.join(''));

    // updating the DOM element
    updateOutputOperation(data.operations.join(''));


}

// UPDATE OUTPUT
function updateOutputOperation(operation) {
    output_operation_element.value = operation;
}

//  UPDATE RESULT
function updateOutputResult(result) {
    output_result_element.innerHTML = result;
}


// =======x===========x===========x==============x===========

// let string = "";
// let ans = 0;

// // Select multiple button elements with the same class
// const buttons = document.querySelectorAll('.btn');

// // Convert NodeList to an array (optional, NodeList is iterable)
// const buttonsArray = Array.from(buttons);

// // Add event listener to each button
// buttonsArray.forEach(button => {
//     button.addEventListener('click', (event) => {

//         console.log(event.target.value);

//         let val = event.target.innerHTML;
//         if (val == "ans") {
//             if (string.startsWith("sqrt")) {
//                 let num = string.substring(4);
//                 string = findSquareRoot(num);
//             }

//             // display equal sign
//             const divText = document.querySelector('.equal-sign');
//             divText.style.visibility = "visible";
//             divText.style.opacity = "1";

//             // evaluate answer
//             ans = eval(string);
//         }
//         else if (val == 'CE') {
//             string = string.substr(0, string.length - 1);
//         }
//         else if (val == 'C') {
//             string = "";
//         }
//         else {
//             string = string + val;
//         }

//         document.querySelector('.input').value = string;
//         document.querySelector('.answer').innerText = ans;
//     });
// });


function findSquareRoot(num) {
    return Math.sqrt(num);
}

// function POWER(num) {
//     return Math.pow(num, 2);
// }

// function FACTORIAL(nums) {
//     if (nums == 1) {
//         return;
//     }

//     return nums * FACTORIAL(nums - 1);
// }