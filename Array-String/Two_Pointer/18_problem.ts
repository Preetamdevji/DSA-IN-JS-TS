// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Output: [1,3,12,0,0]

let nums: Array<number> = [0,1,0,3,12]
const moveZeroInLast = (nums:Array<number>) => {
    let left: number = 0

    for(let right = 0; right<nums.length; right++){
        if(nums[right]!== 0){
            nums[left] = nums[right]
            left++
        }
    }
    

    while (left < nums.length) {
        nums[left] = 0;
        left++;
    }
    return nums
};


console.log(moveZeroInLast(nums));

