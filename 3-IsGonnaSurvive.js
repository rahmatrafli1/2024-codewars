// method 1:
// function hero(bullets, dragons) {
//   //Get Coding!
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// method 2:
const hero = (bullets, dragons) => (bullets / 2 >= dragons ? true : false);

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));
