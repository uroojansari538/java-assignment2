// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
let firstname =prompt('enter your first name')
let lastname = prompt('enter your last name')
let fullname = firstname+ " "+lastname
alert("Hello! welcome " +" "+fullname) 
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
let favoritemobilemodel =prompt('enter your favorite mobile model')
document.write('<h2> favoritemobilemodel; SAMSUNG  </h2>')

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
let word = "Pakistani";
let index = word.indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
let word1 = "Hello World";
let lastIndex = word1.lastIndexOf("l");
document.write("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);
// 5. Write a program to find themimmnnmmmmmmnnmmkk, hwa character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let word2 = "Pakistani";
let character = word2.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);
// 6. Repeat Q1 using string concat() method.
let word3 = "Pakistani";
let index1 = word3.concat().indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' using concat() method is: " + index1);
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("The updated city name is: " + newCity);
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
let message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replace(/and/g, "&");
document.write("The updated message is: " + updatedMessage);
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
let str = "472";
let num = parseInt(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num));
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
let userInput = prompt("Enter a string:");
let capitalLetters = userInput.toUpperCase();
document.write("Original Input: " + userInput + "<br>");
document.write("In Capital Letters: " + capitalLetters);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
let userInput = prompt("Enter a string:");
let titleCase = userInput.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
    return letter.toUpperCase();
});
document.write("Original Input: " + userInput + "<br>");
document.write("In Title Case: " + titleCase);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
let numb = 35.36;
let stri = num.toString().replace(".", "");
document.write("Original Number: " + numb + "<br>");
document.write("After removing the dot: " + stri);
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
et A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search:");
let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
let password = prompt("Enter your password:");
let hasLetter = false;
let hasNumber = false;
let validStart = true;

// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
if (password.length >= 6) {
    if (!isNaN(password[0])) {
        validStart = false;
    }
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            hasNumber = true;

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
let university = "University of Karachi";
let array = university.split(" ");
document.write("Array Elements: " + array.join(", "));
// 17. Write a program to display the last character of a user
// input.
let userInput = prompt("Enter a string:");
let lastCharacter = userInput.charAt(userInput.length - 1);
alert("The last character of the input string is: " + lastCharacter);
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
let sentence = "The quick brown fox jumps over the lazy dog";
let count = (sentence.match(/the/gi) || []).length;
document.write("Number of occurrences of the word 'the': " + count);