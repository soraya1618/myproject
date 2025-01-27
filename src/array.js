// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 word5 + GAP +
//                 word6 +
//                 PUNCT;

//     return str;
// }
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));


// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] +
//                 PUNCT;

//     return str;

// }
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));

//1.for loop
//let arr = [2,5,6,10]
  
//Inkrement
// for (let i = 0; i < 5; i++) {
//    output(i);
    
// }
//for (let i = 0; i <= 20; i += 5)

//dekrement
// //for (let i = 0; i < arr.length; i--) {
//    output(i);
    
// }
//example:
//     const GAP = " ";
// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) {
//     output(i);  //interne Index
//     output(arr[i]);  //Mapping
// }

//Transponierung(jabjaii): untereinander ---> nebeneinander
function getSentenceArr1(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";
   //a. Variante: Struktur GENAU erzeugen.
    // for (let i = 0; i < arr.length; i++) {
    //    if (i != arr.length-1) {
    //     str += arr[i] + GAP;
    //    } else {
    //     str += arr[i] + PUNCT;
    //    };
        
    // }
    //b: struktur erzeugen + trimmen
    // for (let i = 0; i < arr.length-1; i++) {
    //     str += arr[i] + GAP;
        
    // }
    // return str.trim() + PUNCT;
    
    //c:Variante: Ausnutzen von generischen Fuktionen
    return arr.join(GAP) + PUNCT;
}
output(getSentenceArr1(["Ich","bin","die","coole","Maxine","Mützerich"]));
output(getSentenceArr1([4,5,3,8,11]));


//1a. zu "Fuß"- DRY (don't repeat yourself) !!!
//1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
/*Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung(jambandi)
*/
// let a = 0;
// a = a + 1;
// a = a + 1;
// a = a + 1;
// output("inhalt von a : " + a);   //-->1,2,3 
// 1b . hier: Verkettung eines Strings // Transponierung(ja b jaii)
// let str = "";
// for (let i = 0; i < 10; i++) {
//     str += "Test" + " ";   // a = a + 1
//     output(str);
// }

// function output(outputData){
//     console.log(outputData);
// }