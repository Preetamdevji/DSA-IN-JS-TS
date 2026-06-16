// Sort Colors (Dutch National Flag)
// Array mein sirf 0, 1, 2 hain
// In-place sort karo — extra array use mat karo!

let nums = [2, 0, 2, 1, 1, 0]
// Output:  [0, 0, 1, 1, 2, 2]


function sortArray(nums) {

    let low = 0;
    let mid = 0;
    let high = nums.length -1;

    while (mid <= high) {
        if (nums[mid] === 0) {            
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++
            mid++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }
    }
    return nums
}

console.log(sortArray(nums));
