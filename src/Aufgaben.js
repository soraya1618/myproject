/* Mini-Callange */
// satzbau + variable Punktuation
//Vereinbarungen:
// "S" (sentence) --> "." Ich bin Max.
// "Q" (question) --> "?" bist du Max?
// "E" (exclamation) --> "!" Ich bin!

//Parameter --> funktion getSentence([ ... ], "Q"){ ...}
const prompt = require('prompt-sync')({sigint: true});

const S = ".";
const Q = "?";
const E = "!";
const GAP = " ";
const PUNCT = ".";



function isNotValid(arr){
    let sugg = prompt("Punktation für \"" + arr.join(GAP) + "\"wurde nicht automatisch erkannt! bitte Manuel eingeben: ");
    let i = 1

    while ( sugg != "." && sugg != "?" && sugg != "!") {
    
    if (i< 3) {
        i++
        sugg = prompt(i + ". versuch: ");
    } else {
        sugg = "Kein richtige Eingabe! Bitte versuchen Sie es später!";
        return sugg;
    }
   
    }
    return arr.join(GAP) + sugg;
}


output(getSentenceZeichen(["ich", "bin", "Max"], S));
output(getSentenceZeichen(["bist","du","Max"], Q));
output(getSentenceZeichen(["Ich","bin"], E));
output(getSentenceZeichen(["Ein","Projekt","startet", "und","\"", "doch", "es", "gibt", "noch", "keinen", "Text", "allerdings","sollte","das","Layout","schon","bald" ,"präsentiert","werden"], E));

output(getSentenceZeichen(["Ich","weiß","nicht","wie","soll","ich"],"F"));

function getSentenceZeichen(arr, xyz){
    // let str = "";
 // for (let i = 0; i < arr.length; i++) {
   
    // if (i != arr.length-1) {
    //     str += arr[i] + GAP;
    // } else {
        // str += arr[i] + PUNCT;
        switch (xyz) {
            case S:
                return arr.join(GAP) + ".";
            case Q:
                return arr.join(GAP) + "?";
            case E:
                return arr.join(GAP) + "!";
                
            default:
                return isNotValid(arr);
        };

    // }
    // }
// return str.trim() + PUNCT;
// return str;

}
function output(outputStr){
    console.log(outputStr);
}