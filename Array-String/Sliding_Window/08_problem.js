// Count Occurrences of Anagram
// s mein p ke anagrams kitni baar aate hain count karo

let s = "forxxorfxdofr"
let p = "for"
// Output: 3

function OccurrencesofAnagram(s,p) {

    let result = 0;
    let pfreq = {};
    let wfreq = {};
    // Step 1: p ka frequency
    for (let i=0; i < p.length; i++) {
        pfreq[p[i]] = (pfreq[p[i]] || 0) + 1
        // console.log(pfreq);    
    }

    // Step 2: pehli window ka frequency
    for (let i=0; i < p.length; i++) {
        wfreq[s[i]] = (wfreq[s[i]] || 0) + 1
        // console.log(wfreq);
        
    }

    // Step 3: pehli window check karo

    if (isEqual(pfreq, wfreq)) result++;
    // Step 4: slide karo
    let left = 0;
    for (let right = p.length; right < s.length; right++) {
       // new chars add karwane hain
        wfreq[s[right]] = (wfreq[s[right]] || 0) + 1;

        wfreq[s[left]]--;
        if (wfreq[s[left]] === 0) delete wfreq[s[left]]
        left++
        // compare karo
        if (isEqual(pfreq,wfreq)) result++
    }

    return result
}

console.log(OccurrencesofAnagram(s,p));


function isEqual(pfreq, wfreq) {
    for (let keys in pfreq) {
        if (pfreq[keys] !== wfreq[keys]) return false
    }
    return true
}
