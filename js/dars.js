function confirmEnding(str, target) {
  // return str.substring(str.length - target.length) === target;
  return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));


function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}


findElement([1, 2, 3, 4, 5, 6, 7, 8], function (num) {
  return num > 5;
});
