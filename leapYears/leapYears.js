const leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
  }
  
  console.log(leapYears(2000));
  // true 

  
module.exports = leapYears
