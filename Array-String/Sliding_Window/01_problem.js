let nums = [1, 12, -5, -6, 50, 3]
let k = 4

function findMaxAverage(nums, k) {

    // Step 1: pehli window ka sum
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum = sum + nums[i]
    }

    // Step 2: maxSum track karo
    let maxSum = sum

    // Step 3: slide karo
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k]        // hatao
        sum = sum + nums[i]            // add karo
        maxSum = Math.max(maxSum, sum) // max update karo
    }

    // Step 4: average return karo
    return maxSum / k
}

console.log(findMaxAverage(nums, k))
