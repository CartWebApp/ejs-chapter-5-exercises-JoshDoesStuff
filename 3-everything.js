function every(array, test) {
  let arrayLength = array.length - 1
  let i = arrayLength
  while (arrayLength  >= 0) {
    if (test(array[i]) === true){
      i = i - 1
    } else {
      return false
    }
  } 
}

function everySome(array, test) {

}
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  console.log(everySome([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everySome([], n => n < 10));
  // → true