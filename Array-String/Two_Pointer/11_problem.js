let str = "hello world"

function ReverseString(str) {
    let words = str.split(" ")  // ✅ ["hello", "world"]

    for (let i = 0; i < words.length; i++) {
        let chars = words[i].split("")  // ✅ word ko chars mein

        let left = 0
        let right = chars.length - 1

        while (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]]
            left++
            right--
        }

        words[i] = chars.join("")  // ✅ reversed word save karo
    }

    return words.join(" ")  // ✅ words ko join karo
}

console.log(ReverseString(str))  // "olleh dlrow" ✅