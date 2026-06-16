// Maximum of All Subarrays of Size K
let nums = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3

function maximumSubArrayofSizek(nums, k) {

    let result = []

    for (let i = 0; i <= nums.length - k; i++) {
        let window = nums.slice(i, i + k)
        let max = Math.max(...window)
        result.push(max)
    }

    return result
}

console.log(maximumSubArrayofSizek(nums, k))
// [3, 3, 5, 5, 6, 7] ✅