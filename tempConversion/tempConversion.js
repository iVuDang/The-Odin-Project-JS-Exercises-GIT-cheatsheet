const ftoc = function(f) {
  return Math.round((f - 32) * (5/9))
 }
 
 const ctof = function(c) {
  return Math.round(((c * 9/5) + 32))
 }
 
 
 console.log(ftoc(32)) 
 // fahrenheit to celsius, should return 0
 // formula = (f − 32) × 5/9 = 0°C
 
 console.log(ctof(0)) 
 // celsius to fahrenheit, should return 32
 // (c × 9/5) + 32 = 32°F
 

module.exports = {
  ftoc,
  ctof
}
