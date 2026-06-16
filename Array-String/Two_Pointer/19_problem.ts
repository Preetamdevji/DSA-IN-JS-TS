// 392. Is Subsequence
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

let s: string = "abc"
let t: string = "ahbgde"
// Output: true

const findSubsequence = (s: string, t: string): boolean =>{

    let left : number = 0;

    for(let right = 0; right < t.length; right++){
        if (left < s.length && t[right] === s[left]){
            left++
        }
    }
    return left === s.length
}

console.log(findSubsequence(s, t));
