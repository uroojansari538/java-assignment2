// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
let studentname = [];
// 3. Declare and initialize a strings array.
let stringsArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array.
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array.
let mixedArray = ["apple", 1, true, {myname: "sara" }];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
let educationqualifications =["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
// console.log(educationqualifications)
document.write("<h1>QUALIFICATIONS;</h1>")
document.write('<ol>'); 
document.write('<li>HSC</li>');
document.write('<li> BSC</li>');
document.write('<li> BS</li>');
document.write('<li>BCOM</li>');
document.write('<li> MS</li>');
document.write('<li>M.PHILL</li>');
document.write('<li> PHD</li>');
document.write('</ol>');

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
let studentNames = ["John", "michael", "tony"];
let studentsScores = [230, 320, 480];

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentsScores[i] / 500) * 100;
    alert(studentNames[i] + " scored " + studentsScores[i] + " marks, which is " + percentage + "% of total marks.");
}
document.write('score of john 230, percentage:64%<br>')
document.write('score of michael 320, percentage:46%<br>')
document.write('score of tony 480, percentage:96%<br>')

// 9. Initialize an array with color names. Display the array
// elements in your browser.
let colors = ["red", "green", "blue"];
document.write ('<h1>colors</h1>')
document.write('<h2>red</h2> ')
document.write('<h2>blue</h2> ')
document.write('<h2>green</h2> ')


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
let userColorbeginning = prompt("Enter color to add at the beginning:");
colors.unshift(userColorbeginning);
alert("Updated array after adding color at the beginning:", colors);
document.write('<h2>blue,green,red</h2>')
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
let userColorEnd = prompt("Enter color to add at the end:");
colors.push(userColorEnd);
console.log("Updated array after adding color at the end:", colors);
document.write('<h2>blue,red,green</h2>')
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.unshift("yellow", "orange");
console.log("Updated array after adding two more colors at the beginning:", colors);

document.write(' blue,green,red,yellow,orange')

// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
console.log("Updated array after deleting the first color:", colors);
document.write('green,red,yellow,orange')
// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
console.log("Updated array after deleting the last color:", colors);
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
let userIndex = prompt("Enter the index to add a color:");
let userColor = prompt("Enter color to add at index " + userIndex + ":");
colors.splice(userIndex, 0, userColor);
alert("Updated array after adding color at index " + userIndex + ":", colors);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
let deleteIndex = prompt("Enter the index to delete color(s):");
let deleteCount = prompt("Enter the number of colors to delete:");
colors.splice(deleteIndex, deleteCount);
alert("Updated array after deleting color(s) from index " + deleteIndex + ":", colors);
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
let studentScores = [70, 60, 80, 90, 50];
studentScores.sort((a, b) => a - b);
console.log("Sorted student scores:", studentScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
let selectedCities = cities.slice(1, 4);
console.log("Selected cities:", selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
let arr = ["This", "is", "a", "sample", "array"];
let singleString = arr.join(" ");
console.log("Single string:", singleString);
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
let fifoArray = ["40","50","60","70","80","90","100"];
function addToFifo(value) {
    fifoArray.push(value);
}
function removeFromFifo() {
    return fifoArray.shift();
}
addToFifo(1);
addToFifo(2);
addToFifo(3);

console.log(removeFromFifo()); 
console.log(removeFromFifo());

// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)
let lifoArray = ["40","50","60","70","80","90","100"];
function addToLifo(value) {
    lifoArray.push(value);
}
function removeFromLifo() {
    return lifoArray.pop();
}
addToLifo(1);
addToLifo(2);
addToLifo(3);

console.log(removeFromLifo()); 
console.log(removeFromLifo()); 
// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}
document.write("</select>");