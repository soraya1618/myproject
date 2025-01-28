/****************** objekte 1 DAten/Funktione*/

let person = {
    firstName: "John",
    familyName: "jakusa",
    salary: [100000, 120000],
    verheiratet: true,
    sayHello: function(){
        return "salam!"
    }
};
output(person);
output(person.firstName);
output(person.familyName);
output(person.salary);
output(person.salary[0]);
output(person.verheiratet);
output(person.sayHello());





function output(outputData){
    console.log(outputData);
}
