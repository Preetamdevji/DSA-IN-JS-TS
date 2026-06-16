let arr = [1, 2, 3, 4, 5]
let k = 9

// Kitne subarrays hain jinka sum = 9?
// Output: 2


function findSubArray(arr , k) {

    let prefix = [0]
    for(let i=0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i]
        // console.log(prefix);
    }

    let map = {0:1};
    let count = 0;

    for (let j = 1; j < prefix.length; j++){
        let need = prefix[j] - k
        if (map[need]){
            count = map[need]
        }
        map[prefix[j]] = (map[prefix[j]] || 0) + 1
    }
    return count
}


console.log(findSubArray(arr,k));
