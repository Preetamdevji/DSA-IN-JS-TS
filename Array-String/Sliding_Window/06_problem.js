// Maximum Sum Subarray of Size K
// Array mein k size ka subarray dhundo
// jiska sum sabse bada ho

let nums = [2, 1, 5, 1, 3, 2]
let k = 3

function maximumSubArray(nums,k) {

    let sum = 0;
    let maxSum = 0
    // pheli window ka sum
    for(let i=0; i < k; i++) {
        sum = sum + nums[i]   
    }
    // maxsum track kia
    maxSum = sum
    // slide karna hai 
    for (let i=k; i < nums.length; i++) {
        sum = sum - nums[i - k] // remove left index value 
        sum = sum + nums[i]    
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum
}

console.log(maximumSubArray(nums, k));
