// Sorted array mein pair dhundo
// jinka sum target ke equal ho
let nums = [1, 3, 5, 7, 9]
let target = 12
// Output: [3, 9] ya [5, 7]


function findingPairs(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let sum = nums[left] + nums[right]

        if (sum === target) {
            return [nums[left], nums[right]]  // ✅
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return []  // ✅ loop ke baad
}


console.log(findingPairs(nums,target))
