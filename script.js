let string = "";
let ans = 0;

// Select multiple button elements with the same class
const buttons = document.querySelectorAll('.btn');

// Convert NodeList to an array (optional, NodeList is iterable)
const buttonsArray = Array.from(buttons);

// Add event listener to each button
buttonsArray.forEach(button => {
    button.addEventListener('click', (event) => {

        let val = event.target.innerHTML;
        if (val == "ans") {
            if (string.startsWith("sqrt")) {
                let num = string.substring(4);
                string = findSquareRoot(num);
            }
            ans = eval(string);
        }
        else if (val == 'CE') {
            string = string.substr(0, string.length - 1);
        }
        else if (val == 'C') {
            string = "";
        }
        else {
            string = string + val;
        }

        document.querySelector('.input').value = string;
        document.querySelector('.answer').innerText = ans;
    });
});


function findSquareRoot(num) {
    return Math.sqrt(num);
}