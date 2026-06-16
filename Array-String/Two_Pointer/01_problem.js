// // Two Sum — Step by Step
// // Problem: Array mein do numbers find karo jinki sum target ke barabar ho. Unke indexes return karo.

// brute force 
// let nums = [2, 7, 11, 15]
// let target = 9
// Answer: [0, 1]  → kyunke nums[0] + nums[1] = 2 + 7 = 9

// let answer = []

// function equalToTarget () {
//     for (let i = 0; i < nums.length; i++) {
//     for (let j = i - 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             answer = [i,j]
//             console.log('found:', answer);
//         }
//     }
// }
// }
// equalToTarget();


let nums = [2, 5, 7, 9, 11, 13, 15, 17]
let target = 32


function twoSumSorted (nums, target) {

let left_side_index = 0;
let right_side_index = nums.length -1;

while (left_side_index < right_side_index) {
    // code of block execute when's the condition is true.

    let sum = nums[left_side_index] + nums[right_side_index];
    if (sum === target) {
        console.log("left", left_side_index, "right" , right_side_index); // found
        return sum   // found
    } else if (sum < target) {
        left_side_index++;
    }
    else {
        right_side_index--;
        
    }    
}
return []; //not found
}

console.log(twoSumSorted(nums, target));



