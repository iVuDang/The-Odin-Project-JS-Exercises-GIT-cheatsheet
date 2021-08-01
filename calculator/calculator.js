function add (a, b) {
	return a + b; 
}

function subtract (a, b) {
	return a - b; 
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0)
}

function multiply (array) {
	return array.reduce((accumulator, nextItem) => accumulator * nextItem, 0)
}

function power(a, b) {
  return a**b; 
}

// SOLUTION 2
// function power(a, b) {
// 	 return Math.pow(a,b);
// }

function factorial(n) {
 if (n === 0){
   return 1;
 }

 let product = 1; 
 
 for (let i = n; i > 0; i--){
   product *= i;
 }
 return product; 
}

// SOLUTION 2
// const recursiveFactorial = function(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial (n-1);
// };


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
