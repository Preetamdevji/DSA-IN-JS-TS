let s1 = "ab";
let s2 = "eidbaooo";


function checkPermutation(s1,s2) {
    // check validation
    if (s1.length > s2.length) return false;

    let count1 = {};
    let count2 = {};

    // s1 ka count banao
    for (let i=0; i < s1.length; i++){
        count1[s1[i]] = (count1[s1[i]] || 0) + 1
        // console.log(count1);
        
    }

    // s2 ki pehli window banao
    for (let i=0;  i < s1.length; i++) {
        count2[s2[i]] = (count2[s2[i]] || 0) + 1
        // console.log(count2);
    }

    // matches count karo
    let match = 0;
    for (let char in count1){
        if (count1[char] === count2[char]) match++ 
    }

    // ab slide karo
    let left = 0;
    for (let right = s1.length; right < s2.length;  right++) {
        // match mila?
        if (match === Object.keys(count1).length) return true


        // naya char add karo (right)

        let charIn = s2[right]
        count2[charIn] = (count2[charIn] || 0) + 1;
        if (count1[charIn] === count2[charIn]) match++
        else if (count1[charIn] + 1 === count2[charIn]) match--

        // purana char hatao (left)

        let charOut = s2[left];
        count2[charOut]--
        if (count1[charOut] === count2[charOut]) match++        
        else if (count1[charOut] + 1 === count2[charOut]) match--
    }

    return match === Object.keys(count1).length;

} 

console.log(checkPermutation(s1,s2));
