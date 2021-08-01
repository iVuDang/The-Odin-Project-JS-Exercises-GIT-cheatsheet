const palindromes = function(string) {
    let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");     // "vudang"
    // [^A-Za-z] 
    // [A-Za-z] would match anything between A-Z, and a-z. 
    // [^] before A-Za-z indicates anything that is NOT alphabet characters, would be replaced with "" or aka deleted. 
    // g modifier means more than one. 
    
    let reversedString = (
      processedString
        .split("")      // ["v","u","d","a","n","g"]
        .reverse()      // ["g","n","a","d","u","v"]
        .join("")      // "gnaduv"
    );
    return processedString == reversedString; // false because "vudang" =! "gnaduv"
  };
  
  console.log(palindromes('Vu_Dang!')); // false
  console.log(palindromes('lol')); //true 
  
  
  // SOLUTION 2
  function isPalindrome(line) {
    
    const nonAlphaNum = /[\W_]/g;               
    // \W metacharacter is used to find a non-word character. A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
    // \W not word, digit, whitespace - this will eliminate any spaces or non-digits / non-letters
    // g modifier is used to perform a global match (find all matches rather than stopping after the first match)
    
    let firstVersion = line.toLowerCase().replace(nonAlphaNum,'');
    let reversedVersion = firstVersion.split('').reverse().join('');
    
    return firstVersion === reversedVersion;
    
  }
  
  console.log(isPalindrome("anna"));
  // true
  
  
  // SOLUTION 3
  function isPalindrome2(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
  }


module.exports = palindromes
