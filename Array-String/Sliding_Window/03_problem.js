// Longest Repeating Character Replacement
let str = "BBBABBAAA";
let k = 1;

function longestRepeatingChar(str, k) {

    let left = 0;
    let maxfreq = 0;
    let count =   {};
    let maxLen = 0;

    for (let right = 0; right < str.length; right++) {     // 0 > 7
        // console.log("right", right);
        // console.log("strright", str[right]);
        count[str[right]] = (count[str[right]] || 0) + 1;   // {B:5, A:4}
            console.log("c[s[r]]",count[str[right]]);    
            console.log("count", count);       
        
        // console.log("max",maxfreq);
                            //0 , 5:4
        maxfreq = Math.max(maxfreq, count[str[right]])    //  5
        console.log("maxfreq",maxfreq);
          
        

        // console.log("do",(right - left + 1) - maxfreq > k);
            // ((8 - 0 + 1) - 5 > 1)
            console.log("cond", ((8 - 0 + 1) - 5 > 1));
            
            if ((right - left + 1) - maxfreq > k) // true  
                {     
            console.log("right", right);
                                // count { B: 5, A: 2 }
                                //5 - 1
            count[str[left]] = count[str[left]] - 1
            console.log("count[str[left]]", count[str[left]]);
            
            left ++
        }
        console.log("rightyyyy", right);
        console.log("left", left);
                            // (0 , 8 - 3 + 1)    
        maxLen = Math.max(maxLen, right -left + 1);
        
    }
    // return maxLen
}
console.log(longestRepeatingChar(str, k))