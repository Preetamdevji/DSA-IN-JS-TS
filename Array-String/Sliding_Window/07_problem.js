// First Negative Number in Every Window of Size K
// Har window mein pehla negative number dhundo
// koi negative nahi toh 0 print karo

let nums = [-3, -5, 50, -1, 4, -6]
let k = 2


function FirstNegativeWindow(nums, k) {

    let result = [];
    let queue = []

    for (let i = 0; i < k; i++) {
        if (nums[i] < 0) {
            queue.push(i)     // save index
        }
    }

    // pehli window ka answer
    if (queue.length > 0){
        result.push(nums[queue[0]])
    } else {
        result.push(0);
    }
    // result.push(queue.length > 0 ? nums[queue[0]] : 0)

    for (let i = k; i < nums.length; i++) {

        // naya element add karo
        if (nums[i] < 0) queue.push(i);

        // purana element remove karo
        if (queue[0] <= i - k) queue.shift()

        result.push(queue.length > 0 ? nums[queue[0]] : 0)
    }

    return result
}

console.log(FirstNegativeWindow(nums,k));
