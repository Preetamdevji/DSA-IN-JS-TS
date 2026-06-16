// find max average
let nums = [1, 12, -5, -6, 50, 3]
let k = 4


const findMaxAverage = (nums,k)=>{
    // pheli window kaha sum

    let sum = 0;
    for(let i=0; i<k; i++){
        sum = sum + nums[i]
    }
    // Step 2: maxSum track karo
    let maxSum = sum

    // slide karo
    for(let i=k; i<nums.length; i++){
        sum = sum - [nums[i - k]]
        sum = sum + nums[i]
        maxSum = Math.max(maxSum,sum)
    }
    
    return maxSum/k
}

console.log(findMaxAverage(nums,k));
