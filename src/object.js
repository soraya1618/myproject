/****************** objekte 1 DAten/Funktione*/

// let person = {
//     firstName: "John",
//     familyName: "jakusa",
//     salary: [100000, 120000],
//     verheiratet: true,
//     sayHello: function(){
//         return "salam!"
//             return  "hallo , ich bin " + person.firstName + " und verdiene im Jahr " + person.salary[0] +  " Euro!"; 
//     }
// };
// output(person);
// output(person.firstName);
// output(person.familyName);
// output(person.salary);
// output(person.salary[0]);
// output(person.verheiratet);
// output(person.sayHello());





function output(outputData){
    console.log(outputData);
}

/********** verschachtelte/ hierarchie von objecte **********/

let baikal = {
            value : "10m",
            deep : {
                deeper: {
                    deepest : " es scheint Licht in 1642!",
                    temperature : "4 celcius"

                }
            }
        };

        output(baikal);
        output(baikal.value);
        output(baikal.deep);
output(baikal.deep.deeper);
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.temperature);



