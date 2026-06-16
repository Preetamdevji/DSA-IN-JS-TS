// Longest substring without repeating characters
let str: String = "abcedabcdebb"

const lengthOfLongestSubString = (str: String) => {

    let left : number = 0;
    let maxLen : number = 0;
    let set = new Set()

    for(let right=0; right < str.length; right++){
        console.log("max", maxLen);
        
        while (set.has(str[right])){
            console.log("max1", maxLen);
            console.log("set", set);
            set.delete(str[left])
            left++    
        }
        set.add(str[right])
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}

console.log(lengthOfLongestSubString(str));
