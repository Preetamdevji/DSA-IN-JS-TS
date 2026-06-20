// Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.

// Example 1:
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

let nums: Array<number> = [2,3,1,2,4,3]
let target: number = 7
// Output: 2

const minimumSizeSubArraySum = (nums: Array<number>, target:number) => {
    let left: number = 0; 
    let sum : number = 0;
    let minLen : number = Infinity
    
    for(let right=0; right < nums.length; right++){
        sum = sum + nums[right];

        while(sum >= target){
            minLen = Math.min(minLen, right - left + 1)

            sum =sum - nums[left]
            left++
        }
    }
    return minLen === Infinity ? 0 : minLen

}

console.log(minimumSizeSubArraySum(nums,target));

