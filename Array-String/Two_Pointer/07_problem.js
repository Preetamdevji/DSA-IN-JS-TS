// Squares of a Sorted Array
// Sorted array ke squares nikalo
// Result bhi sorted hona chahiye!

let nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]


function SquaresOfASortedArray(nums) {
    
    let left = 0;
    let right = nums.length -1;
    let result = new Array (nums.length)
    let p = nums.length -1;

    // console.log(result);
    //   console.log(p);
    

    while (left <= right){

        let leftsq = nums[left] ** 2;
        let rightsq = nums[right] ** 2;
        
       if (leftsq > rightsq){
        result[p] = leftsq;
        left++
       }else { 
        result[p] = rightsq
        right--  
    }
    p--
    }
    return result

}

console.log(SquaresOfASortedArray(nums));


