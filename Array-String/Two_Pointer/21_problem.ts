// Max Number of K-Sum Pairs
// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

// Example 1:
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
let nums: Array<number> = [1,2,3,4]
let k: number = 5
// Output: 2

const pairsSumAndReturnMaxOperation = (nums: Array<number>, k:number) => {

    let left : number = 0;
    let right : number = nums.length - 1;
    let sum : number = 0
    let operation: number = 0
    let sortNums = nums.sort((a,b) => a - b)

    while(left < right) {
        sum = sortNums[left] + sortNums[right]
        if(sum == k){
            operation++
            left++
            right--
        }else if (sum < k){
            left++
        }else{
            right--
        }
    }
    return operation

}

console.log(pairsSumAndReturnMaxOperation(nums, k));
