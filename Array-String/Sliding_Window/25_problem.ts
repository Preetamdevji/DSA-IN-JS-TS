// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 1:

let str: string = "abcabcbb"
// Output: 3
 

const longestSubstringWithoutRepeatingCharacters = (str: string) => {

    let left : number = 0;
    let seen = new Map<string, number>()
    let maxLen = 0;
    for(let right=0; right<str.length; right++){

        let currentChars = str[right]
        if(seen.has(currentChars)){
            let oldIndex = seen.get(currentChars)!            
            left = Math.max(left, oldIndex + 1)       
        }
        seen.set(currentChars, right)

        maxLen = Math.max(maxLen, right - left + 1)   
    }
    return maxLen
}

console.log(longestSubstringWithoutRepeatingCharacters(str));
