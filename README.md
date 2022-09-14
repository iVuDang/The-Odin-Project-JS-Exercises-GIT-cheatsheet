# The Odin Project JavaScript Exercises


## Instructions:
Part I: <br>
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4
<br/>
Part II: <br>
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-5

## Purpose: 
To solve the listed JavaScript exercise problems. 

## Preview:
<img src="https://github.com/iVuDang/The-Odin-Project-JavaScript-Exercises/blob/a36273d4d9ad1cfb4d329e4f22649ff9bd8969ca/The%20Odin%20Project%20-%20Fibonacci.png" width=50% height=50%>

### Technologies: 
* JavaScript

### Tools
* Microsoft Visual Studio Code
* Git Bash
* GitHub

### Outcome
#### Part I 
- [x] helloWorld
- [x] repeatString
- [x] reverseString
- [x] removeFromArray
- [x] sumAll
- [x] leapYears
- [x] tempConversion

#### Part II
- [x] calculator
- [x] palindromes
- [x] fibonacci
- [x] getTheTitles
- [ ] findTheOldest (did not understand, to revisit)


### Exercise 10 - Fibonacci :white_check_mark:
I created a solution walkthrough for: **Exercise 10 - Fibonacci**: 

| Website | Link | 
| ------------- | ------------- | 
| YouTube tutorial | https://youtu.be/2qS9HL7n8F0 | 
| CodePen demo | https://codepen.io/iVuDang/pen/MWmXrvw | 


<br />


## Summary

### What I learned
#### Part I:
1. jasmine 'name of file.spec.js' to run test 
2. To exclude a value from an array, can use .filter(val => !args.includes(val))
3. Pseudocode means filter through the array, and return any value that is NOT (val)

#### Part II:
1. Easier to test and experiment the script in CodePen.
2. Useful .reduce methods to note. Example:
```
function sum (array) {
	return array.reduce((total, current) => total + current, 0)
}

function multiply (array) {
	return array.reduce((accumulator, nextItem) => accumulator * nextItem, 0)
}

```


### Cheatsheet for using Git 
- - - -

**Navigating**: 
 
Git Command  | Description 
------------- | -------------
cd ~/xyz  | first few letters of directory, then hit TAB , it should autofill the directory.
cd ..  | navigates up one directory
cd -  | navigates to the previous directory (or back)
cd ..  | navigates up one directory
cd /  | navigates to root directory
pwd  | checks current file path
git status  | checks what has been so far


- - - -
**Uploading to GitHub**:
Git Command  | Description 
------------- | -------------
git add -A | adds change to the staging area
git commit -m 'message' | commits the staged change with a message description 
git push origin main | uploads the staged snapshot onto GitHub

- - - -
**Downloading from GitHub**:
(if updates were rejected because the remote contains work)
* git remote add origin [github url]
* git pull origin main (if conflict, pull changes from github)
- - - -
**Conflict**: 
* Git force --force - last resort to force upload onto GitHub
- - - -



### What could be improved
* Need more practice and understanding of the rest parameter syntax *'...args'* (Exercise removeFromArray)
* Did not understand Exercise 12 - findTheOldest. To revisit once having a stronger understanding and more practice with JavaScript.  



