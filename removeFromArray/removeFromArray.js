const removeFromArray = function(...args) {
  
 const array = args[0]
  
 return array.filter(val => !args.includes(val))
}
  

// rest parameter syntax ... allows a function to accept an indefinite number of arguments as an array
/*
  * Pseudocode is:
  * filter through the array, and return any value that is NOT val aka our indicated value

*/

console.log(removeFromArray([1, 2, 3, 4], 3));
// [1,2,4]



// SOLUTION 2

/*
// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the spread operator.  If this is unfamiliar to you look it up!
const removeFromArray = function (...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

*/



module.exports = removeFromArray
