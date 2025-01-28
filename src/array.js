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
// function getSentenceArr1(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";
//    //a. Variante: Struktur GENAU erzeugen.
//     // for (let i = 0; i < arr.length; i++) {
//     //    if (i != arr.length-1) {
//     //     str += arr[i] + GAP;
//     //    } else {
//     //     str += arr[i] + PUNCT;
//     //    };
        
//     // }
//     //b: struktur erzeugen + trimmen
//     // for (let i = 0; i < arr.length-1; i++) {
//     //     str += arr[i] + GAP;
        
//     // }
//     // return str.trim() + PUNCT;
    
//     //c:Variante: Ausnutzen von generischen Fuktionen
//     return arr.join(GAP) + PUNCT;
// }
// output(getSentenceArr1(["Ich","bin","die","coole","Maxine","Mützerich"]));
// output(getSentenceArr1([4,5,3,8,11]));


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

//console.log(" - - - - - - --  - - - - - - - - - - - - - - - -");



//dinamisierung von Arrays
// let arr = [];
// output(arr);

// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Sorayya");
// output(arr);
 
// //pop

// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);









// Html code erzeugen
const COBJ = {open_o: "<", close_o:"</",close:">"};
const TAGS = [ "html", "head", "head", "body",
                "h1", "h1",
                "p", "p", 
                "ul","li", "li", "li", "li","ul", 
                "ol", "li", "li", "ol",  
                "p","p",
                "body","html"
            ];

const NEW_LINE_STR = "\n";
const NEW_TAB_STR = "\t";

let stack = [];


//call
output(generateHtml());
// output(generateHtml(TAGS[1]));
// output(generateHtml(TAGS[1]));

function generateHtml() {
    let htmlStr = "";
    let count = 0;
    let op = "";

    for (let i = 0; i < TAGS.length; i++) {
        if (generateOpenElement(TAGS[i])) {
            count = stack.length-1;
            op = "open";
        } else {
            count = stack.length;
            op = "close";
        }

        htmlStr += getTabs(count) + getElement(TAGS[i],op) + NEW_LINE_STR;
        }
        return htmlStr;
}

function getTabs(count) {
    let tabs = "";
    for (let i = 0; i < count; i++) {
        tabs += "\t";
    }
    return tabs;
}

function generateOpenElement(tag){

    let cond = (tag != stack[stack.length-1]);
    
    if (cond) {
        stack.push(tag);
        output(stack);
        return true;
        
    } else {
        stack.pop(tag);
        output(stack);
        return false;
    }
}


//zusammenbau der Elements
function getElement(tag, op){
    switch (op) {
        case "open":
            return COBJ.open_o + tag + COBJ.close;
        case "close":
            return COBJ.close_o + tag + COBJ.close;
        default:
            return "ERROR";
    }
}
function output(outputData) {
    console.log(outputData);
}

