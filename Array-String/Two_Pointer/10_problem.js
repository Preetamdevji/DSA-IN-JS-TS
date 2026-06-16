// Longest Mountain in Array
// Sabse lamba "mountain" dhundo
// Mountain = pehle badhta hai phir ghatta hai

let nums = [2, 1, 4, 7, 3, 2, 5]
// Output: 5  → [1, 4, 7, 3, 2]


//   7
//  / \
// 4   3
//    / \
// 1    2   5


function longestMountain(nums){

    let maxlen= 0;
    for (let i=1; i<nums.length - 1; i++){

        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1 ]) {

            let left = i - 1;
            let right = i + 1;

            while(left > 0 && nums[left] > nums[left -1]) {
                left--
            }

            while(right < nums.length -1 && nums[right] > nums[right + 1]){
                right++
            }
            let len = right - left + 1
            maxlen = Math.max(maxlen,len)
        }
    }


    return maxlen
}

console.log(longestMountain(nums));
