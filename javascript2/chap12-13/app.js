// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
let character1 = prompt("Enter a character:")
let ascii = character1.charCodeAt(0)
if (ascii >= 48 && ascii <= 57) {
    alert("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    alert("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number, uppercase letter, or lowercase letter.");
}
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.



// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
let n = prompt(' enter your Number')
if ( n  > 1) {
    alert('the number is positive')
} 
else if (
     n <0) {
    alert('the number is negative')
} 
else  {
    alert('the number is zero')
} 

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

let character = prompt('enter only 1 character')

if ( character=== 'a'|| character==='e'|| character==='i'||character==='o'||character==='u') {
    alert(true)
}
else if(character === 'b'||character==='c'||character==='d'||character==='f'||character==='g'||character==='h'||character==='j'||character==='k'||character==='l'||character==='m'||character==='n'||character==='p'||character==='q'||character==='r'||character==='t'||character==='v'||character==='w'||character==='x'||character==='y'||character==='z'){
    alert(false)
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

let userpassword = prompt('enter your password')
const password = "urooj123"
if (userpassword === password){
    alert('Correct! The password you entered matches the original password')
}
else if (userpassword !== password ){
    alert('Incorrect password')
}
else {
    alert('Please enter your password')
}
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// /greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) { alert
    (greeting = "Good day")}
else {
greeting = "Good evening";
}



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.
let hourclock = prompt('enter the time')
// let time =1900
if ('time>= 0000' && 'time= 1200'){
    alert('good morning')
}
else if ( 'time >=1200' && 'time< 1700'){
    alert('good afternoon')
}
else if ('time>=1700' && 'time<2100'){
    alert('good evening')
    
   } 
   else if('time>=2100' && 'time <2359'){
    alert('good night')
   }