// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
let city=prompt("enteryourcityname" )
if(city === 'karachi'){
alert('welcome to city of light.....!')}
else if (city === 'lahore'){
    alert('welcome to heart of pakistan')
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
let gender=prompt('enteryourgender')
if (gender === 'female') {alert('Good Morning Ma’am.')}
else if (gender === 'male'){alert('Good Morning Sir')}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
let signalcolor = prompt('enter the signal color')
if (signalcolor === 'red'){
    alert('Must Stop')
} else if(signalcolor === 'Yellow'){
    alert('Ready to move')
}
else if (signalcolor === 'green'){
    alert('Move now')
}
 else {
    alert('Invalid signal color');
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    let remainingfuelincar =prompt('enter your remaining fuel in car' )
    if (remainingfuelincar >  0.25){
        alert('Please refill the fuel in your car')
    } else if (remainingfuelincar < 0.25){
        alert('you have enough fuel in car')
    }
//     5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 let a = 4;
 let x= prompt('enter your number')
if (++a === 5){
alert("given condition for variable a is true");
}

 let b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 let c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

 let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
let y= prompt('enter the smaller car or cat')
 if("car" < "cat"){
    alert("car is smaller than cat");
    }
//     6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:    
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
let subject1 = prompt('enter subject 1 mark')
let subject2 = prompt('enter subject 2 mark')
let subject3 = prompt('enter subject 3 mark')
let totalmarks = subject1+subject2+subject3
if (totalmarks <  240){
    alert( ' 80% or above ,A-one,Excellent')

} 

 
else if (totalmarks < 210){
    alert( ' 70% ,A,Good')


} 
else if (totalmarks <  180 ) {
    alert( '60%, B,you need to improve')
}
else if ( totalmarks>180){
    alert('Sorry ,fail')
}
else {
    alert ( 'sorry,invalid')
}
document .write('<h1>Mark Sheet</h1>,<br>')
document .write('Total Marks:300<br>')
document .write('Marks obtained:219 <br> ')
document .write('Percentage:73% <br>')
document .write('Grade:B <br>')
document .write('Remarks:You need to improve <br>')
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
let secretnumber = 7
let n = prompt('enteranynumber(between1-10)')
if(n===secretnumber){
    alert('Bingo! Correct answer.')
}
else if (n===secretnumber+1|| n===secretnumber-1) {
    alert('Close enough to the correct answer.')
}
else {
    alert( 'Sorry! the correct answer is' + secretnumber)
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
let number= prompt('enter a number')
if (number % 3 === 0) {
    alert(number + " is divisible by 3")
}
else {
    alert(number + " is not divisible by 3")
}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
let newnumber = prompt('enter a number')
if (number % 2 === 0) {
    alert(number + " is a even number")
}
else {
    alert(number + " is odd number")
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”
let temperature = prompt("Enter the temperature:")
if (temperature > 40) {
 alert   ("It is too hot outside.")
}
else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("The temperature is below 10 degrees.");
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let secondNumber = prompt("Enter the second number:")
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
    alert("The result of addition is: " + result);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert("The result of subtraction is: " + result);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert("The result of multiplication is: " + result);
} else if (operation === "/") {
    if (secondNumber === 0) {
        alert("Error! Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
        alert("The result of division is: " + result);
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
    alert("The remainder of division is: " + result);
} else {
    alert("Invalid operation entered.");
}

