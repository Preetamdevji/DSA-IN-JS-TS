// 1493. Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 2:
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

let nums: Array<number> = [0,1,1,1,0,1,1,0,1]
// Output: 5

const longestSubArray = (nums: Array<number>) => {
    
    let countZeros : number = 0
    let maxLen : number = 0
    let left : number = 0


    for(let right=0; right<nums.length; right++){
        if(nums[right] === 0){
            countZeros += 1
        }
    

    // maxLen = countZeros

    while(countZeros > 1){
        if(nums[left] === 0){
            countZeros -= 1
        }
        left++
    }
    maxLen = Math.max(maxLen, right - left)
}
    return maxLen    
}

console.log(longestSubArray(nums));
