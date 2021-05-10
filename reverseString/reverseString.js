const reverseString = function(string) {
    return string.split('') // ["h","e","l","l","o"," ","i","V","u","D","a","n","g"]
                .reverse() // ["g","n","a","D","u","V","i"," ","o","l","l","e","h"]
                .join(''); 
}


console.log(reverseString('hello iVuDang'))
// "gnaDuVi olleh"





module.exports = reverseString
