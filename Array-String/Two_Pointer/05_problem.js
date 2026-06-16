let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let left = 0;
let right = height.length -1;
let maxleft = 0;
let maxright = 0;
let total = 0;


while(left < right) {

    if (height[left] < height[right]) {
        maxleft = Math.max(maxleft,height[left]); 
        total = total + (maxleft - height[left]);
        left++
    } else {
        maxright = Math.max(maxright,height[right]);
        total = total + (maxright - height[right]);
        right--
    }
}

console.log(total);





