// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters,
// in any substring of s with length k.

let str: string = "abciiidef";
let k: number = 3;

const findMaxVowelsInGivenLength = (str: string, k:number) => {

    let vowel = new Set(["a","e","i","o","u"])
    let vowelCount : number = 0
    let maxLen : number = 0

    for(let i=0; i<k; i++){
        if (vowel.has(str[i])){
            vowelCount++
        }
    }

    maxLen = vowelCount

    // console.log(maxLen);
    for(let i=k; i<str.length; i++){
        if(vowel.has(str[i - k])){
            vowelCount--
        }

        if(vowel.has(str[i])){
            vowelCount++
        }

        maxLen = Math.max(maxLen, vowelCount)
    }

    return maxLen
}


console.log(findMaxVowelsInGivenLength(str,k));
