// var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
// var uniqeName = [];
// for (var i = 0; i < name.length; i++){
//     var element = name[i];
//     var index = uniqeName.indexOf(element);
//     if(index == -1){
//         uniqeName.push(element);
//     }
// }
// console.log(uniqeName)

// var name = ['rohim', 'korim', 'shamim', 'jamal', 'rohim', 'shamim', 'kamal', 'samad'];
// var primariSchool = [];
// for (var i = 0; i < name.length; i++){
//     var compliment = name[i];
//     var index = primariSchool.indexOf(compliment);
//     if(index == -1){
//         primariSchool.push(compliment);
//     }
// }
// console.log(primariSchool);

var studentMarks = [33, 43, 33, 33, 59, 99, 100, 85, 100, 85]
var titumirCollage = [];
for (var i = 0; i < studentMarks.length; i++){
    var chairman = studentMarks[i];
    var member = titumirCollage.indexOf(chairman);
    if (member == -1){
        titumirCollage.push(chairman);
    }
}
console.log(titumirCollage);