// method 1:
// const reverseSeq = (n) => {
//   // Initialize the 'result' variable as an empty array.
//   const result = [];

//   // Iterate from n to 1.
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }

//   // Print the result
//   return result;
// };

// method 2:
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
