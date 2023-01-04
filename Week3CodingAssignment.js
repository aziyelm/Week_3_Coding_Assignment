/*1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
Programmatically subtract the value of the first element in the array from the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed!
*/
const ages = []; //declare array
ages.push (3, 9, 23, 64, 2, 8, 28, 93); //input numerical values
let lastAge = ages[ages.length-1]; //declare variable
console.log(lastAge - ages[0]); //output remainder (subract first element from last element)

//1.a. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push (25); //input a new age to the ages array
lastAge = ages[ages.length-1]; // repeat step 1
console.log(lastAge - ages[0]); //output new remainder

//1.b. Use a loop to iterate through the array and calculate the average age. 
for (i=0,sum=0;i<ages.length;i++) { // for loop: declare variables; set condition to evalute if i is < the number of elements; iterate
    sum += ages[i]; //code executes to find the sum of all values. 
  }
  console.log(sum/ages.length); //output average (divide sum by the number of elements)
  
//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = []; //declare array
names.push ("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"); //input names as string values
console.log(names);

//2.a. Use a loop to iterate through the array and calculate the average number of letters per name. 
for (i=0,sum=0;i<names.length;i++) { //for loop: declare variables, set condition to evalaute if i<number of names; iterate
    sum += names[i].length; //adds the length of each name together
}
console.log(sum/names.length); //output average = sum/number of names

//2.b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for (i = 0; i < names.length; i++) { //for loop: declare variable; evalutate if i<number of names; iterate
    namesJoin = names.join(' '); //join() method concatenate names separated by a space
}
console.log(namesJoin); //output concatenated names

//3. How do you access the last element of any array?
console.log("array[arr.length-1]"); //length-1 because index values start at 0
console.log(names[names.length-1]); //output Bob

//4. How do you access the first element of any array?
console.log("array[0]"); //index values start at 0
console.log(names[0]); //output Sam

/*5. Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.
For example: 
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
*/
let nameLengths = []; //declare array
for (i = 0; i < names.length; i++) { //for loop; delcare variable; evaluate if i<number of names; iterate
    nameLengths = names.map(names => names.length); //map() method runs the function on each element in the names array and returns the length of each name in a new array
}
console.log(nameLengths); //returns the new array
		

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
for (i = 0, sum=0; i < nameLengths.length; i++) { //for loop: declare variables; evlautes if i<number of elements in the array; iterate
    sum += nameLengths[i]; //adds the lengths of each name together
}
console.log(sum); //output sum 

/*7. Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, 
I would expect the function to return ‘HelloHelloHello’).
*/
function duplicateWord(word , n){ //declare function, set parameters
    console.log(word.repeat(n)); //repeat() method to return a new string copied n number of times
}
duplicateWord("Hello" , 3); //call function & input arguments 

/*8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.
*/
function createFullName(firstName, lastName){ //declare function, set parameters
    console.log(firstName + " " + lastName); //output first name, space, and last name
}
createFullName("Aziyel", "Madrigal"); //call function & input arguments

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const numbers = [100,1]; //declare array
function checkIfGreaterThan100 (arr){ //declare function, set array as parameter
   for(i = 0, sum = 0; i < numbers.length; i++){ //for loop: declare variables; evaluate if i<number of elements; iterate 
    sum += numbers[i]; //add all elements in the array
   }
   console.log(sum>100); //output true or false
}
checkIfGreaterThan100(numbers); //call function. output is true because 101>100

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(arr){ //declare function, set array as parameter
   for(i = 0, sum = 0; i < numbers.length; i++){ //for loop iterates over the numbers array again
    sum += numbers[i]; //adds all elements
   }
   console.log(sum/numbers.length); //output average
}
average(numbers); //call function

/*11. Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
const first = [4,5,6]; //declare array
const second = [1,2,3]; //declare array
let averageFirst = first.reduce((a, b) => a + b) / first.length; //create variable to calculate average by using reduce() method to return the sum of all elements in 1st array
let averageSecond = second.reduce((a, b) => a + b) / second.length; //create variable return average of elements in 2nd array
console.log(averageFirst, averageSecond); //check code. output averages of the arrays

function checkIfFirstGreaterThanSecond(arr1, arr2){ //declare function & set arrays as parameters
    console.log(averageFirst>averageSecond); //output true or false
}
checkIfFirstGreaterThanSecond(averageFirst, averageSecond); //output true because 5>2


/*12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

function willBuyDrink(isHotOutside, moneyInPocket){ //declare function & set parameters
    if (isHotOutside=true && moneyInPocket>10.50){ //if-else statement, both conditions must be true to return true
        console.log(true); //output true if conditions are met
    }
    else{ 
        console.log(false); //output false if conditions are not met
    }
}

willBuyDrink(true, 20); //call function. output true because isHotOutside is true and 20>10.50

/*13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
The function merryChristmas prompts the user for their first name and alerts them of the present they will receive.
This is a fun and interactive way to tell family or friends what Christmas present they will get.
*/
var person = prompt("What is your first name?"); //create variable that prompts for user to input their first name
console.log(person); //output to console

function merryChristmas(){ //declare function 
    if(person.toLowerCase() == "edra" || person.toLowerCase() == "edralin"){ //if else statements that return an alert with a specific message depending on the first name.
        //toLowerCase() method turns input to lowercase, therefore input is not case sensitive 
        alert("Merry Christmas! You get a purse!"); //my mom will get a purse
        console.log("Merry Christmas! You get a purse!"); //output to console to save input and results
    } else if(person.toLowerCase() == "brando"){
        alert("Merry Christmas! You get a watch!"); //my dad will get a watch
        console.log("Merry Christmas! You get a watch!"); //output to console to save message
    } else{
        alert("Merry Christmas! You get a Starbucks giftcard!"); //everyone besides edra/edralin and brando will get a Starbucks gift card. 
        console.log("Merry Christmas! You get an Amazon giftcard!"); //output to console
    }
}
merryChristmas(person); //call function