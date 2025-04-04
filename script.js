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
        formula: POWER,
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
    },
    {
        name: "sin",
        symbol: "sin",
        formula: "trigo(Math.sin,",
        type: "trigo_function"
    },
    {
        name: "tan",
        symbol: "tan",
        formula: "trigo(Math.tan,",
        type: "trigo_function"
    },
    {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number"
    },
    {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number"
    },
    {
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
    },
    {
        name: "e",
        symbol: "e",
        formula: "Math.E",
        type: "number"
    },
    {
        name: "rad",
        symbol: "Rad",
        formula: false,
        type: "key"
    },
    {
        name: "deg",
        symbol: "Deg",
        formula: false,
        type: "key"
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

// ANSWER fOR FUTURE USE
let ans;

// RAD and DEG
let RADIAN = true;


const rad_btn = document.getElementById("rad");
const deg_btn = document.getElementById("deg");

rad_btn.classList.add("active-angle");

function angleToggle() {
    rad_btn.classList.toggle("active-angle");
    deg_btn.classList.toggle("active-angle");
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

        let symbol, formula;
        if (button.name == "factorial") {

            symbol = "!";
            formula = button.formula;

            data.operations.push(symbol);
            data.formula.push(formula);

        }
        else if (button.name == "power") {

            symbol = "^(";
            formula = button.formula;

            data.operations.push(symbol);
            data.formula.push(formula);

        }
        else if (button.name == "square") {

            symbol = "^(";
            formula = button.formula;

            data.operations.push(symbol);
            data.formula.push(formula);

            data.operations.push("2)");
            data.formula.push("2)");
        }
        else { // log, ln

            symbol = button.symbol + "(";
            formula = button.symbol + "(";

            data.operations.push(symbol);
            data.formula.push(formula);
        }

    }
    else if (button.type == "trigo_function") {  // sin, cos, tan

        data.operations.push(button.symbol + "(");
        data.formula.push(button.formula);

    }
    else if (button.type == "key") {

        // clear equation
        if (button.name == "clear") {
            data.operations = [];
            data.formula = [];

            updateOutputResult(0);
            updateOutputOperation(0);
        }
        else if (button.name == "delete") {
            data.operations.pop();
            data.formula.pop();
        }
        else if (button.name == "rad") {
            RADIAN = true;
            angleToggle();
        }
        else if (button.name == "deg") {
            RADIAN = false;
            angleToggle();
        }

    }
    else if (button.type == "calculate") {
        // calculate final answer
        formula_str = data.formula.join('');
        console.log(data.formula);


        console.log("formula" + formula_str);

        // FIXING FACTORIAL AND POWER ISSUE
        /* Math - 5!  data. operation - 5FACTORIAL  */

        let power_search_result = search(data.formula, POWER);
        let factorial_search_result = search(data.formula, FACTORIAL);
        console.log(power_search_result, factorial_search_result);

        // GET POWER BASE AND REPLACE IT WITH RIGHT FORMULA
        const powerBase = powerBaseGetter(data.formula, power_search_result);

        powerBase.forEach(base => {
            let toReplace = base + POWER;
            let replacement = "Math.pow(" + base + ",";

            formula_str = formula_str.replace(toReplace, replacement);
        })

        // GET THE FACTORIAL NUMBER AND REPLACE IT WITH RIGHT FORMULA
        const factoral_num = factorialNumberGetter(data.formula, factorial_search_result);

        factoral_num.forEach(factorial => {
            formula_str = formula_str.replace(factorial.toReplace, factorial.replacement);
        })

        console.log(formula_str);

        let result;
        try {
            result = eval(formula_str);
        } catch (error) {
            if (error instanceof SyntaxError) {
                result = "Systex Error!"
            }
        }

        //display equal sign
        const divText = document.querySelector('.equal-sign');
        divText.style.visibility = "visible";
        divText.style.opacity = "0.7";

        //Storing the ans
        if (result != "Systex Error!") {
            ans = result;
            data.operations = [result];
            data.formula = [result];
        }

        updateOutputResult(result);

        return;
    }

    console.log(data.operations.join(''));

    // updating the DOM element
    updateOutputOperation(data.operations.join(''));

}

// POWER BASE GETTER
function powerBaseGetter(formula, power_search_result) {
    let power_bases = [];

    power_search_result.forEach(power_index => {
        let base = [];

        let parenthesisCount = 0;
        let previous_index = power_index - 1;

        while (previous_index >= 0) {

            if (formula[previous_index] == "(") parenthesisCount--;
            if (formula[previous_index] == ")") parenthesisCount++;

            let is_operator = false;

            OPERATORS.forEach(OPERATOR => {
                if (formula[previous_index] == OPERATOR) is_operator = true;
            })

            let is_power = formula[previous_index] == POWER;

            if ((is_operator && parenthesisCount == 0) || is_power) {
                break;
            }

            base.unshift((formula[previous_index]))
            previous_index--;
        }

        power_bases.push(base.join(''));
    })

    return power_bases;
}

// FACTORIAL GETTER FUNCTION
function factorialNumberGetter(formula, factorial_search_result) {
    let factorial_num = [];
    let factorial_seq = 0;

    factorial_search_result.forEach(fact_idx => {
        let number = [];

        let next_index = fact_idx + 1;
        let next_input = formula[next_index];

        if (next_index == FACTORIAL) {
            factorial_seq++;
            return;
        }

        // IF THERE WAS A FACTORIAL SEQUENCE, WE NEED TO GET
        // A NUMBER OF THE VERY FIRST FACTORIAL FUNCTION
        let first_factorial_idx = fact_idx - factorial_seq;

        //THEN TO GET THE NUMBER RIGHT BEFOR IT
        let prev_index = first_factorial_idx - 1;
        let paranthesis = 0;

        while (prev_index >= 0) {
            if (formula[prev_index] == "(") paranthesis--;
            if (formula[prev_index] == ")") paranthesis++;

            let is_operator = false;

            OPERATORS.forEach(OPERATOR => {
                if (formula[prev_index] == OPERATOR) is_operator = true;
            })

            if ((is_operator && paranthesis == 0)) {
                break;
            }

            number.unshift((formula[prev_index]))
            prev_index--;
        }

        let number_str = number.join('');
        const factorial = "factorial(", close_parenthesis = ")";
        let times = factorial_seq + 1;

        let toReplace = number_str + FACTORIAL.repeat(times);
        let replacement = factorial.repeat(times) + number_str + close_parenthesis.repeat(times);

        factorial_num.push({
            toReplace: toReplace,
            replacement: replacement
        })

        // REST FACTORIAL SEQUENCE
        factorial_seq = 0;

    })

    return factorial_num;
}


// SEARCH FACTORIAL AND POWER FUNCTION IN FORMULA ARRAY
function search(array, keyword) {
    let search_result = [];

    array.forEach((element, idx) => {
        if (element == keyword) search_result.push(idx);
    })

    return search_result;
}

// UPDATE OUTPUT
function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation;
}

//  UPDATE RESULT
function updateOutputResult(result) {
    output_result_element.innerHTML = result;
}

function findSquareRoot(num) {
    return Math.sqrt(num);
}

// TRIGNOMETRIC FUNCTION
function trigo(callback, angle) {
    if (!RADIAN) {

        angle = angle * Math.PI / 100;

    }
    return callback(angle);
}

// FACTORIAL
function factorial(number) {

    if (number % 1 != 0) {
        return gamma(number);
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let res = 1;

    for (let i = 1; i <= number; i++) {

        res *= i;
        if (res === Infinity) {
            return Infinity;
        }

    }
    return res;
}

// GAMMA FUNCTINON
function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
        n--;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
            x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}