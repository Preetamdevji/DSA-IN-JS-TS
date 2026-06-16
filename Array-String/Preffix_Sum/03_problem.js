let nums = [1, 1, 1];
let k = 2;
// Output: 2

function subArrayOFK(nums, k) {
    let prefix = [0];
    let count = 0;
    let map = {0: 1}
    for(let i = 0; i < nums.length; i++){
        prefix[i + 1] = prefix[i] + nums[i]
        
        let currentSum = prefix[i + 1];   
        console.log(map);
             

        if(map[currentSum] - k){
            count+= map[currentSum - k]
        }

        map[currentSum] = (map[currentSum] | 0) + 1; 
    }
    return count

}


console.log(subArrayOFK(nums, k));
