// Find the length of the longest substring that contains at most k distinct characters.

let str: string = "aaabbccd"
let k: number = 2

const lengthofthelongestsubstring = (str: string, k: number) => {
    let left: number = 0;
    let set = new Set()
    let maxLen = 0;

    for(let right=0; right < str.length; right++){
            while(set.has(str[right])){
            set.delete(str[right])
            left++
        }
        set.add(str[right])
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}

console.log(lengthofthelongestsubstring(str,k));




