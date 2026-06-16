// Type 1 — Range Sum Query (easiest)

let arr = [2, 4, 6, 8, 10, 12]

// Yeh queries answer karo:
// Query 1: index 0 se 2 tak sum kya hai?
// Query 2: index 1 se 4 tak sum kya hai?
// Query 3: index 2 se 5 tak sum kya hai?

function rangeSumQuery(arr){
    let prefix =[0];
    for (let i=0; i < arr.length; i++){
        prefix[i+1]= prefix[i] + arr[i]
        // console.log(prefix);
        
    }

    let q1 = prefix[3] - prefix[0]
    let q2 = prefix[5] - prefix[1]
    let q3 = prefix[6] - prefix[2]

    console.log("Query 1 (Index 0 se 3):", q1);
    console.log("Query 2 (Index 2 se 5):", q2);
    console.log("Query 3 (Index 1 se 6):", q3);
    return prefix
    
}

console.log(rangeSumQuery(arr));
