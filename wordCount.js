// var speech = "I am a good person. I don't snore at night.";
// console.log(speech);

// var speech = "I am a good person. I don't snore at night.";
// for (var i =0; i < speech.length; i++){
//     var char = speech[i];
//     console.log(char);
// }

// var word = "I am a good person. I don't snore at night."
// var count = 0;
// for (var i = 0; i < word.length; i++){
//     var letter = word [i];
//     if (letter == " "){
//         count++;
//     }
// }
// console.log(count)

// var word = "I am a good person. I don't snore at night."
// var count = 0;
// for (var i = 0; i < word.length; i++){
//     var letter = word [i];
//     if (letter == " "){
//         count++;
//     }
// }
// count++;
// console.log(count)

var word = "I am   a     good person. I     don't snore at night."
var count = 0;
for (var i = 0; i < word.length; i++){
    var letter = word [i];
    if (letter == " " && word[i - 1] != " "){
        count++;
    }
}
console.log(count)