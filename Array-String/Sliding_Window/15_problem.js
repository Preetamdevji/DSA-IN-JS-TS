// what is sliding window
// sliding window is an optimized techniques when you solve this.
// when to you
// 1 Array or String
// Continous, SubArray, substring 
// It's is work on fixed and variable size window


// Pattern 1: Fixed Size Window

// Question:

// Size k ka maximum sum subarray find karo.
let arr = [2,1,5,1,3,2]
let k =3


const findMaximumSumOfSubArray=(arr, k)=>{

    let sum = 0;
    for(let i=0; i<k; i++){
        sum = sum + arr[i]
        console.log("sum", sum);
        
    }

    let maxSum = sum
    console.log("max", maxSum);
    

    for(let j=k; j<arr.length; j++){
        console.log("visualize",sum = sum - arr[j - k]);
        console.log("new element", sum = sum + arr[j]);
        maxSum = Math.max(maxSum, sum)
        
        
    }
    return maxSum
}


console.log(findMaximumSumOfSubArray(arr,k));
