// Question: Pivot Index
// sum of elements from 0 → i-1 == sum of elements from i+1 → end
let arr = [1, 7, 3, 6, 5, 6];

function pivotTable(arr){
    let prefix = [0];
    let leftSum = 0;
    let totalSum = 0;
    let rightSum = 0;

    // Step 1: totalSum calculate karo
    for(let i = 0; i < arr.length; i++){
        totalSum += arr[i];
    }

    // Step 2: prefix + pivot check
    for(let i = 0; i < arr.length; i++){
        prefix[i + 1] = prefix[i] + arr[i];

        leftSum = prefix[i];
        rightSum = totalSum - prefix[i + 1]; 

        if (leftSum == rightSum){
            return i;
        }
    }

    return -1;
}

// let arr = [1, 7, 3, 6, 5, 6];
console.log(pivotTable(arr)); // Output: 3