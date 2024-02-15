let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(arrays) {
    return arrays[0].concat(arrays[1]).concat(arrays[2])
}
console.log(flatten(arrays))
// → [1, 2, 3, 4, 5, 6]