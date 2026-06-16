let arr = [3, 1, 4, 1, 5, 9, 2, 6]

// Yeh queries answer karo:
// Query 1: index 0 se 3 tak sum kya hai?
// Query 2: index 2 se 5 tak sum kya hai?
// Query 3: index 1 se 6 tak sum kya hai?

function solvedQuires(arr) {
    let preffix = [0];
    for (let i = 0; i < arr.length; i++) {
        preffix[i + 1] = preffix[i] + arr[i]
        // console.log(preffix);
    }

    let q1 = preffix[4] - preffix[0];
    let q2 = preffix[6] - preffix[2];
    let q3 = preffix[7] - preffix[1];
    
    console.log("Query 1 (Index 0 se 3):", q1);
    console.log("Query 2 (Index 2 se 5):", q2);
    console.log("Query 3 (Index 1 se 6):", q3);
    return preffix
    
}

console.log(solvedQuires(arr));
