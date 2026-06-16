let s = "ADOBECODEBANC"
let t = "ABC"

function minimumWindowSubString(s, t) {

    let left = 0;
    let need = {};

    for (let chars of t) {
        need[chars] = (need[chars] || 0) + 1
    }

    let have = {};
    let formed = 0;
    let required = Object.keys(need).length;
    let minlen = Infinity;
    let minWindow = "";

    for (let right = 0; right < s.length; right++) {

        // Step 1: add karo
        let charsIn = s[right]
        have[charsIn] = (have[charsIn] || 0) + 1

        // Step 2: formed update karo
        if (need[charsIn] && have[charsIn] === need[charsIn]) {
            formed++
        }

        // Step 3 & 4: valid → shrink + minWindow track
        while (formed === required) {

            if (right - left + 1 < minlen) {
                minlen = right - left + 1
                minWindow = s.slice(left, right + 1)
            }

            let charOut = s[left]
            have[charOut]--

            if (need[charOut] && have[charOut] < need[charOut]) {
                formed--
            }

            left++
        }
    }

    return minWindow
}

console.log(minimumWindowSubString(s, t))  