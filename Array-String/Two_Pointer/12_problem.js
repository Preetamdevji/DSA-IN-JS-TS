let nums = [1, 2, 3, 4, 5]
// Array ko in-place reverse karo
// Output: [5, 4, 3, 2, 1]

function reverseArray(nums){
        let low = 0;
        let high = nums.length -1;

        while(low < high) {
            [nums[high], nums[low]] = [nums[low], nums[high]];
            low++
            high--
        }
    return nums
}

console.log(reverseArray(nums));
