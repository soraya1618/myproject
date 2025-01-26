
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/



const prompt = require('prompt-sync')({sigint: true});
// test
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));






function add(a, b) {
    return a + b;
}



function negat(a, b) {
    return a - b;
}

// output(multiple(2,2));
// output(multiple(2,0));
function multiple(a, b) {
    return a * b;
}

const ERROR_STR_DIV = "Error: Division by zero is not allowed!";
// output(divide(2,-2));
// output(divide(4,0));
// output(divide(2,-2));
// output(divide(0, 3));
// output(divide(0,0));
function divide(a, b) {
    if  (b != 0) {
        return a / b;
        
    } else {
        return ERROR_STR_DIV;
    }
    
}    
function Potenz(a, b) {
     return a**b;
} 


//was soll gemacht werden?
const ERROR_STR_GEN = " Irgendwas ist schief gelaufen!";
//module: calculator | tests:
//agreement : "+","-","*",":","/", "**"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"**"));
// output(calculator(3,2,"#?!"));
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return negat(a, b);
        case "*":
            return multiple(a, b);
            case ":":
                return divide(a, b);
        case "/":
            return divide(a, b);
        case "**":
                return Potenz(a, b);
        default:
            return ERROR_STR_GEN;
    }

}
//TWO: wie soll es gelöst werden?
startApp(calculator(getErsterZahl,getZweiteZahl,getOperator));
function startApp() {
   output(calculator(getErsterZahl(),getZweiteZahl(),getOperator()))
}   
//nächste Lösungsweg: prompt in funktion.
//ich brauche eine funktion, die mir erste Zahl liefert.
//ich brauche eine funktion, die mir zweite Zahl liefert.
//ich brauche eine funktion, die mir operator liefert.

function getErsterZahl() {
    return parseFloat(prompt("Gib eine Zahl ein: "));
}

function getZweiteZahl() {
    return parseFloat(prompt("Gib eine weitere Zahl ein: "));
}
function getOperator() {
    return prompt("Gib den Operator ein: ");
}
// output("hello, jasmin!");
// output(6);
function output(result) {
    console.log(result);
}

//______funktion III _____________________
// abbrechen mit strg + C
 