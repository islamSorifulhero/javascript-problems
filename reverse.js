// function reverseString(str){
//     var reverse = "";
//     for (var i = 0; i < str.length; i++){
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }
// var statement = "Hello Alien bhai brother.";
// var forAlien = reverseString(statement);
// console.log(forAlien);

function reverseString(str){
    var reverse = "";
    for (var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai brother.";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("Ki khawa jai, khida lagse.")
console.log(foodVlog);