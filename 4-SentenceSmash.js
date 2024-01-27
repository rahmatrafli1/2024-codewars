// method 1:
// function smash(words) {
//   return words.join(" ");
// }

// method 2:
const smash = (words) => words.join(" ");

console.log(smash([]));
console.log(smash(["hello"]));
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
