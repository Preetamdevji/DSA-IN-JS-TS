// Subarray Product Less Than K
let nums = [10, 5, 2, 6]
let k = 100
// Output: 8



function numSubarrayProductLessThanK(nums,K){

    let left = 0;
    let product = 1;
    let count = 0;
    for (let right =0; right < nums.length; right++) {
        product = product * nums[right]
        while(product >= k){
            product = product / nums[left]
            left++
        }
        count += right - left +1 
        
    }
    return count
}

console.log(numSubarrayProductLessThanK(nums, k));
