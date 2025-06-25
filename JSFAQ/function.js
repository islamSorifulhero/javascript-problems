// function eventify (num){
//     if (num % 2 == 0){
//         console.log(num, ': is even number')
//     }
//     else{
//         console.log(num*2, ': is odd number')
//     }
// }


// nums = [5, 34, 33, 22, 11];

// for (let i =0; i < nuns.length; i++){
//     const num = nums[i];
//     eventify(num);
// }


// friends_age = [13, 15, 65, 33];
// for(let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     eventify(age);
// }


function event(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num, ': is even number')
        }
        else{
            console.log(num*2, ': is odd number')
        }
    }
}
nums = [5, 12, 45, 8];
event(nums)
