let str = "araaci"
let k = 2

function longestVowelsSubstring(str,k){

    let left = 0;
    let maxLen = 0;
    let vowels = new Set(['a','e','i','o','u'])
    let count = {};

    for (let right = 0; right < str.length; right++) {
        if (vowels.has(str[right]))
        count[str[right]] = (count[str[right]] || 0) + 1

        while(Object.keys(count).length > k) {
            let charsOut = str[left]
            if(vowels.has(charsOut)){
                count[charsOut]--
                if(count[charsOut] === 0) delete count[charsOut]
            }
            left++
        }
        
        if (Object.keys(count).length === k) {
            maxLen = Math.max(maxLen, right - left + 1)
        }
        
    }
    
    return maxLen
}

console.log(longestVowelsSubstring(str,k));
