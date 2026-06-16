// // 30. Substring with Concatenation of All Words
// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
let str: string = "barfoothefoobarman";
let words: Array<string>= ["foo","bar"];

const substringWithConcatenation=(str: string, words:Array<string>) => {

    let singleWordsLength: number = words[0].length
    let totalWordsCount: number = words.length
    let windowSize : number = singleWordsLength * totalWordsCount

    // Reference map in words array
    let wordCount = new Map<string,number>()

    for(let word of words){
        let count = wordCount.get(word) || 0;
        wordCount.set(word, count + 1)
    }

    let result: number[] = []

    for(let i = 0; i<str.length - windowSize; i++){

        let seenWords = new Map<string,number>();
        let j: number = 0;

        while(j < totalWordsCount){
            let wordIndex = i + j * singleWordsLength;
            let currentWord = str.substring(wordIndex, wordIndex + singleWordsLength);
        }


    }

    
    


    
}

console.log(substringWithConcatenation(str, words));
