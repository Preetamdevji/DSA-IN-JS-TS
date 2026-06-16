let word = "A man, a plan, a canal: Panama"
// Output: true  → "amanaplanacanalpanama"

function cleanString () {
      return word.toLowerCase().replace(/[^a-z0-9]/g, "");
}
// cleanString();

function checkPalindrome() {
   let str = cleanString(); 
   let  left = 0;
   let right = str.length - 1;
   
   while (left < right) {
      // code of block execute
      if (str[left] !== str[right]) {
         console.log("not match");
         return false
      }
      left++;
      right--;
   }
   console.log("match");
   return true
}
checkPalindrome()


