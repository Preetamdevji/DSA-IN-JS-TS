// Problem: Longest Subarray with Sum = K
// find the maximum length of a subarray whose sum equals K.
let arr = [1, -1, 5, -2, 3]
let k = 3


function longestSubArray(arr,k) {

    let prefix = [0];
    let currentSum = 0;
    let map = {}
    let max = 0
    for(let i=0; i < arr.length; i++){
        prefix[i + 1] = prefix[i] + arr[i]
        currentSum = prefix[i+1]

        if (map[currentSum - k]){
            max = Math.max(max, map[currentSum - k])
        }
    }
    return max
}

console.log(longestSubArray(arr,k));
