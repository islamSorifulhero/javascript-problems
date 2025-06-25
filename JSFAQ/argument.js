// function addNumbers(num1, num2){
//     return num1 + num2;
// }
// var result = addNumbers(3, 5);
// console.log(result);


// function addNumbers(num1, num2){
//     console.log(arguments)
//     return num1 + num2;
// }
// var result = addNumbers(3, 5, 9, 15);
// console.log(result);


// function addNumbers(num1, num2){
//     console.log(arguments[3])
//     return num1 + num2;
// }
// var result = addNumbers(3, 5, 9, 15);
// console.log(result);


function addNumbers(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        console.log(num);
    }
    return num1 + num2;
}
var result = addNumbers(3, 5, 8, 15, 33);
console.log(result)