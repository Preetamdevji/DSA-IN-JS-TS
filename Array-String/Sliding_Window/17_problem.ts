// Longest Repeating Character with 1 Replacement 
let str1: string = "AAAAABABA"; // TypeScript mein primitive types lowercase ('string') hoti hain
let k1: number = 1;

const longestRepeatingCharactersReplacement = (str1: string, k1: number): number => {
    let result: number = 0;
    
    // Type definition for dynamic object keys (string to number mapping)
    let count: Record<string,number> = {}
    let maxfreq: number = 0;
    let left: number = 0;
    
    for (let right: number = 0; right < str1.length; right++) {
        // Logic same hai, sirf bracket placement aur undefined check fix kiya hai
        count[str1[right]] = (count[str1[right]] || 0) + 1;
        
        maxfreq = Math.max(maxfreq, count[str1[right]]);
        
        // Parameter 'k1' use kiya hai jo aapne function argument mein pass kiya tha
        if ((right - left + 1) - maxfreq > k1) {
            // Aapke logic ke mutabiq yahan frequency badh rahi hai
            count[str1[left]] = count[str1[left]] + 1; 
            left++;
        }
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};

console.log(longestRepeatingCharactersReplacement(str1, k1));
