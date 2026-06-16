// 3Sum   Pattern Two Pointer

let nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1,-1,2], [-1,0,1]]


nums.sort((a,b)=> a - b);

let result = [];


for (let i = 0; i < nums.length; i++) {


    // skip duplicate

    if (i > 0 && nums[i] === nums[i - 1]) continue // check duplicate with previous value
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
        let sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
            // console.log("sum:", sum);
            result.push(nums[i], nums[left], nums[right]);
            left++;
            right--;
            while(left < right && nums[left] === nums[left - 1]) left++;
            while(left < right && nums[right] === nums[right -1]) right--;
            
        } else if (sum < 0) {
            left++
        } else {
            right--
        }
    }
}

console.log(result);



