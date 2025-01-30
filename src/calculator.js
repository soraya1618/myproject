function Calculate() {
    let firstValue = document.querySelector('#input1').value;
    let secondValue = document.querySelector('#input2').value;
    let result = firstValue * secondValue;
    document.querySelector('#result').value = result;
}

console.log("call f");
document.querySelector('#btnResult').addEventListener('click', Calculate);