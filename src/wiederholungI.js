const prompt = require('prompt-sync')({signit: true});
const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";
const ERROR_STR_GEN = "Irgendwas ging schief!";

let a = parseFloat(prompt("Gib eine Zahl ein: "));
let b = parseFloat(prompt("Gib eine weitere Zahl ein: "));


function addieren() {
    let summe = a + b;
    return summe;
}
function subtrahieren() {
    let differenz = a - b;
    return differenz;
}

function multiplizieren() {
    let produkt = a * b;
    return produkt;
}
function dividieren() {
    let quotient = a / b;
    return quotient;
}

//output(addieren());
output(subtrahieren());

function output (outputData){
    console.log(outputData);
}