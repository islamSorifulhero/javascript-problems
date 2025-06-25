// function callback(name, age, task) {
//     console.log('Hello', name);
//     console.log('your age', age)
// }

// callback('Sogir Uddin', 17)


// function callback(name, age, task){
//     console.log('Hello', name);
//     console.log('your age', age)
//     task();
// }

// function washHand(){
//     console.log('wash hand with soap')
// }
// function takeShower(){
//     console.log('Take shower');
// }
// function scrollFacebook(){
//     console.log('Scroll facebook but dont like any post');
// }

// callback('Sogir Uddin', 17, washHand);
// callback('Jogir Uddin', 13, takeShower);
// callback('mugir Uddin', 21, scrollFacebook);


// function callback(name, age, task){
//     task();
//     console.log('Hello', name);
//     console.log('your age', age)
// }

// function washHand(){
//     console.log('wash hand with soap')
// }
// function takeShower(){
//     console.log('Take shower');
// }
// function scrollFacebook(){
//     console.log('Scroll facebook but dont like any post');
// }

// callback('Sogir Uddin', 17, washHand);
// callback('Jogir Uddin', 13, takeShower);
// callback('mugir Uddin', 21, scrollFacebook);

function callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age)
    task();
}
function wasHand(){
    console.log('mouth wash kore asho');
}
function takeShower(){
    console.log('shower niye naw');
}
callback('Hannan', 32, wasHand);
callback('Mannan', 36, takeShower);