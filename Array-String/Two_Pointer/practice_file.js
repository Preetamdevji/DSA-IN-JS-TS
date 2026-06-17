const fs = require("fs")

console.log(1);

const results = fs.readFileSync("./contact.txt", "utf-8");
console.log("results1",results);


console.log(2);


fs.readFile("./contact.txt", "utf-8", (error, data)=>{
    console.log("data", data);
    
})


console.log(3);