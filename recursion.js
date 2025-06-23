// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// var results = factorial (4);
// console.log(results);

// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// function factorialRecursive(num){
//     if (num == 1){
//         return 1;
//     }
//     else{
//         return num *factorialRecursive(num -1);
//     }
// }
// var results = factorialRecursive (5);
// console.log(results);

function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
function factorialRecursive(num){
    if (num == 1){
        console.log(num);
        return 1;
    }
    else{
        console.log(num, num - 1);
        return num *factorialRecursive(num -1);
    }
}
var results = factorialRecursive (5);
console.log(results);