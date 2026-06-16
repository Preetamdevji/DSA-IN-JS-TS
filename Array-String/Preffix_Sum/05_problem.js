let arr = [1, 2, 3];
let k = 3;

function countSubArrayOfK(arr, k){
 
    let prefix = [0];
    let count = 0;
    let currentSum = 0
    let map = {0:1}
    for(let i=0; i < arr.length; i++){
        prefix[i + 1] = prefix[i] + arr[i]
        currentSum = prefix[i + 1]

        if(map[currentSum - k]){
            count+= map[currentSum - k]
        }

        map[currentSum] = (map[currentSum] || 0) + 1

    }
    return count
}

console.log(countSubArrayOfK(arr, k));
