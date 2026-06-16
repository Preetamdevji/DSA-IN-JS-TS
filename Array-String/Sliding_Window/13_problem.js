str = "aabacbebebe"
k = 3

// Exactly 3 distinct characters wali
// sabse lamba substring dhundo!

function distinctKLongest(str, k) {
    let left = 0;
    let count = {};
    let maxlen = 0

    for (let right = 0; right < str.length; right++) {
        // add chars
        count[str[right]] = (count[str[right]] || 0) + 1
        // console.log(count);  
        // check k is greater than distinct if grater than shrink from left
        while(Object.keys(count).length > k){
            count[str[left]]--
            if(count[str[left]] === 0) delete count[str[left]]
            left++
        }
        maxlen = Math.max(maxlen , right - left + 1)
        
    }
    return maxlen
}

console.log(distinctKLongest(str, k));
