const getTheTitles = function(array) {
    return array.map(book => book.title)
  };
  
  
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  
  console.log(getTheTitles(books)) // ['Book','Book2'])
  
  // remember we can access objects in two ways
  // object.name
  // object['name']
  
  
  // SOLUTION 2
  const getTheTitles2 = function(array) {
    return array.map(x => x['title'])
  };
  
  console.log(getTheTitles2(books)) // ['Book','Book2'])
  
  // x represents each object in the array
  // map iterates through each object in the array, and applies our arrow function
  // Array.map() method creates a new array from the results of calling a function for every element

  
module.exports = getTheTitles;
