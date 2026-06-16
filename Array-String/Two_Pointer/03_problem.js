// Container With Most Water

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

let left = 0;
let right = height.length - 1;
let maxwater = 0;

while (left < right) {
    // let data = height[left], height[right]
    let water = (right - left) * Math.min(height[left], height[right])
    maxwater = Math.max(water , maxwater); 
    
    if (height[left] < height[right]) {
        left++;
    } else {
        right--
    }
    // console.log(maxwater);
}

console.log(maxwater);