// method 1:
// function grow(x) {
//   // Initialize the variable 'res' starting from array index 0.
//   let res = x[0];

//   // Iterate as many times as the x-th array.
//   for (let i = 1; i < x.length; i++) {
//     res = res * x[i];
//   }

//   // Print the result
//   return res;
// }

// method 2:
// function grow(x) {
//   const res = x.reduce((acc, curr) => acc * curr, 1);
//   return res;
// }

// method 3:
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3, 4]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
