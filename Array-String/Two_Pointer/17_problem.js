let word = "A man, a plan, a canal: Panama"
// Output: true  → "amanaplanacanalpanama"
// check palindrome

const cleanString =(word)=>{
        return word.toLowerCase().replace(/[^a-zA-Z]/g, "");  
}

console.log(cleanString(word));


const checkPalindrome = (cleanString) => {
    let str = cleanString
    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]){
            console.log("string not found");
            return false
        }
        left++
        right--
    }
    console.log("match");
    return true   
}

console.log(checkPalindrome(cleanString));

