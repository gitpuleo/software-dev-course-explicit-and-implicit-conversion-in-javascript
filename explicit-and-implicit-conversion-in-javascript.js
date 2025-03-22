/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/* "5" here in the first chunk of code is a string, however implicit type conversion because
of the subtraction operator coerces it into a number, preserving the logic of the 
code when it produces a result of 3. No error. 
*/
let result = "5" - 2;
console.log("The result is: " + result);

/* Perhaps there is a logic error here? In that even though the boolean is false, isValid is true
and so "This is valid" prints. Perhaps you should inset a not operator, !, then? Otherwise I cannot
see what is wrong with this code which runs just fine. 
*/
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

/* In this final bit of code, because of the + operator the age vareiable as a string coerces the
number 5 into being a string as well, leading to the unexpected result of 255, an unlikely age. 
By forcing age to a number with the Number() function, the code functions as expected, producing 30.
*/
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

//Task 2

/* The Number() fucntion explicitly converts the ageInYears string to a number before 1 is added.
*/
let ageInYears = "31";
let ageAtBirthday = Number(ageInYears) + 1;
console.log("Age on birthday is " + ageAtBirthday);

/* The division operator implicitly coerces the string to a number.
*/
let humanAge = "70"
let ageInDogYears = humanAge / 7
console.log("I am 70 years old, so my age in dog years is " + ageInDogYears + ".");