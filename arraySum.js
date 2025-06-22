// var numbers = [45, 65, 78, 12, 3, 54, 65];
// var sum = 0;
// for (var i =0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("total of the number: ", sum);

// function getArraySum(numbers){
//     var sum = 0;
//     for (var i =0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
//    }
//    return sum;
// }
// var numbers = [45, 65, 78, 12, 3, 54, 65];
// var result = getArraySum(numbers);
// console.log("total of the numbers: ", result);

function sumNum(num){
    var sum = 0;
    for (var i = 0; i < num.length; i++){
        var element = num[i];
        sum = sum + element;
    }
    return sum;
}
var num = [1, 2, 2, 2, 3, 4, 5, 5]
var output = sumNum(num);
console.log("all nums is: " , output)