// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
console.log("task 9 test");
function reverseThisString(string){
    let newStr = '';

for(var i = string.length - 1; i >= 0; i--) {
    newStr += string[i];

}
return newStr;
}
console.log(reverseThisString("hello"));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD

function swapCase(string) {
    //For loop that iterates through the string and grabs a character 
    //Put the char in an if statement and change if its uppercase change to lowercase
    //If lowercase change to uppercase
    //Check which index is uppercase
let newStr = "";
for(var i = 0; i < string.length; i++)
{
    if(string.charAt(i) <= "Z")
    {
      newStr += string.charAt(i).toLowerCase(); 
    }
    else if(string.charAt(i) >= "a")
    {
        newStr += string.charAt(i).toUpperCase(); 
    }
}
return newStr;
}
console.log(swapCase("heLLo"));

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
const F = new Array(23, 32, 41, 50, 59); //farenheit
const C = F.map(function toCelcius(F){

    return (F - 32) * (5/9);
}

);

console.log(C);


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map

var inputArr = new Array(20,30,50,80,90,100);
var boolArr = inputArr.map(function passOrFail(inputArr){
    if(inputArr >= 75)
    {
        return true;
    }
    if(inputArr < 75)
    {
        return false;
    }
}

);
console.log(boolArr);




//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const combineArr = [];
    for(var i = 0; i < 5; i++)
    {
        combineArr[i] = cardinalNumbers[i] + ' is ' + germanNumbers[i];
    }
    return combineArr;
}
console.log(germanNumbers());


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return numbers.filter(function (number){

        return number == 2 || number == 3 || number == 5 || number == 7 || number == 11 || number==13;

    }
    );

    }
    console.log(returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, 
//log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) 
// "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes)
// "CSC225 RULES I LOVE JAVASCRIPT" Console log out:

function finalFunc(){

    
    for(var i = 1; i <=100; i++)
    {
        var a = "";
        if(i % 3 === 0)
        {
            a+= "CSC225 RULES";
        }
        if(i %5 === 0)
        {
            if(a){
                a+= " I LOVE JAVASCRIPT";
            }
            else{
                a+= "I LOVE JAVASCRIPT";
            }
            
            
        }
        if(a){
        console.log(a);
        }
        else{
            console.log(i);
        }
    }
}
console.log(finalFunc());