let string = "";

// Select multiple button elements with the same class
const buttons = document.querySelectorAll('.button');

// Convert NodeList to an array (optional, NodeList is iterable)
const buttonsArray = Array.from(buttons);

// Add event listener to each button
buttonsArray.forEach(button => {
    button.addEventListener('click', (event) => {
        let val = event.target.innerHTML;
        if (val == '=') {
            if (string.startsWith("sqrt")) {
                let num = string.substring(4);
                string = findSquareRoot(num);
            }
            string = eval(string);
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

        document.querySelector('input').value = string;
    });
});


function findSquareRoot(num) {
    return Math.sqrt(num);
}