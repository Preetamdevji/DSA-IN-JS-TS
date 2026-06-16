// Har number ka square nikalo
// Result sorted hona chahiye
let nums = [-5, -3, -1, 0, 2, 4]
// Output: [0, 1, 4, 9, 16, 25]

function squareOfSortedArray(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length)
    let p = nums.length - 1;


    while(left <= right){
            let leftsq = nums[left] ** 2;
            let rightsq = nums[right] ** 2

            // console.log(leftsq);
            // // console.log(rightsq);
            
            if(leftsq > rightsq){
                result[p]= leftsq
                left++
            }else{
                result[p] = rightsq
                right--
            }
            p--
    }
    return result
}

console.log(squareOfSortedArray(nums));
