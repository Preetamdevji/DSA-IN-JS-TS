let arr = [1, 2, 3, 4, 5]
let k = 9

// Kitne subarrays hain jinka sum = 9?
// Output: 2
// [2, 3, 4] → sum = 9
// [4, 5]    → sum = 9


function findSubArray(arr,k) {
    let prefix = [0]
    let count = 0

    let map = { 0:1 }
    for(let i=0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i]
        // console.log(prefix);

        let currentSum = prefix[i + 1];

        if(map[currentSum - k]){
            count+= map[currentSum - k]
        }

        map[currentSum] = (map[currentSum] || 0) + 1;
    }
    return count
}

console.log(findSubArray(arr,k));
