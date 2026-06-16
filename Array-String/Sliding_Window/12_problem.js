let nums = [4, -1, 2, -1, 5, -3]
let k = 3
// Har window ka minimum dhundo
// Output: [-1, -1, -1, -1, -3]


function findMinimumInEveryWindow(nums,k) {

    let result = [];
    let deque = [];
    // result of first window
    for(let i = 0; i < nums.length; i++){
        if(deque.length > 0 && deque[0] <= i - k){
            deque.shift()
        }

        while(deque.length > 0 && nums[deque[deque.length - 1]] > nums[i]) {
            deque.pop()
        }

        deque.push(i)

        if (i >= k - 1){
            result.push(nums[deque[0]])
        }
    }
    return result
}

console.log(findMinimumInEveryWindow(nums,k));
