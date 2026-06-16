// Move Zeroes
// Saare zeros end mein move karo
// Order maintain karo — in-place!

let nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]



const moveZeroInEnd = (nums) => {
    let slow = 0

    for(let fast = 0; fast < nums.length; fast++){
        if (nums[fast] != 0){
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
        slow++
        }
    }


    return nums

    
}

console.log(moveZeroInEnd(nums));


