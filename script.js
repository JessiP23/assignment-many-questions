//1. Variable & Data Types

const myName = 'Jessi';
let favoriteLanguage = 'Python';
let newFavoriteLanguage = 'JavaScript';
newFavoriteLanguage = favoriteLanguage;
console.log("My name is " + myName + " and I like " + favoriteLanguage);

//2. Strings
let firstVAriable;
firstVAriable = "Hello World";
firstVAriable = 10;
let secondVariable = firstVAriable;
secondVariable = "I dont know what is going on";
console.log(firstVAriable);
let yourName = "Jessi";
console.log('Hello, my name is ' + yourName);

//3. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


//4. The Farm
let animal = 'cow';
console.log('moooo');
if (animal === 'cow'){
    console.log('mooooo');
} else {
    console.log('I guess the animal is smarter than you');
}

//5. Driver's Ed
let age = 22;
if (age >= 16){
    console.log('Here are the keys!');
} else {
    console.log("Sorry, you're too young");
}

//6.Loops

//A. The Basics
for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let j = 10; j <= 400; j++){
    console.log(j)
}

for (let k = 12; k < 4000; k += 3){
    console.log(k);
}


//B. Get even
for (let i = 1; i < 100; i ++){
    if (i % 2 == 0){
        console.log(i + " is an even number");
    } else {
        console.log(i);
    }
}


//C. Give me Five
for (let i = 0; i < 100; i++){
    if (i % 5 == 0){
        console.log("I found a " + i +". High five!")
    } else if (i % 3 == 0) {
        console.log("I found a " + i + ". Three is a crowd")
    }
}


//D. Savings account
let bank_account;
for (let i = 0; i <= 10; i++){
    bank_account += i;
    console.log(bank_account);
}


for (let i = 0; i <= 100; i++){
    bank_account += i;
    bank_account + 2;
    console.log(bank_account);
}



//III. Arrays & Control Flow
//A Talka bout in your group

var quotes = [
    "This is my name",
    "My name is Jessi Pavia Martinez",
    "I am surpassing myself as a human being."
];

//C. Accessing elements
const randomThings = [1, 10, "Hello", true];
//To access the first element we just call the array by using the zero string (each array starts with zero index)
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);


//D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "GitHub"];
//To access the third element I just gotta type the nae of the array and the index 4
ourClass[4] = "Octotat";
ourClass.push("Cloud City");
console.log(ourClass);


//E. Mix It Up
const myArray = [5, 10, 500, 20];

//Add the string Aegon to the end of the array
myArray.push("Aegon");

myArray.push("Daenerys");
//Remove the first element of the array
myArray.shift();
//Adding bob marley to the beginning of the array
myArray.unshift("Bob Marley");
//removes the last element of the array
myArray.pop();
//Mutated the array by reversing the array.
myArray.reverse();
console.log(myArray);


//F. Biggie Smalls
let number = 20;

if (number < 100){
    console.log("little number");
} else {
    console.log('Big number');
}


//G. Monkey in the Middle
if (number < 5){
    console.log('little number');
} else {
    console.log("big number");
}


//H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];


const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that" + kristynsCloset[2] + " today!");

const rayban = kristynsCloset.indexOf("yello knit that");
kristynsCloset.splice(rayban + 1, 0, "raybans");

kristynsCloset[5] = 'stained knit hat';
//first element in Thom's shirtsarray
const shirt = thomsCloset[0][0];
//any element in Thom's pants
const pants = thomsCloset[1][1];
//element in Thom's accesories
const accesories = thomsCloset[2][1];
console.log("Thom i looking fierce in a " + shirt + ", " + pants + ", and " + accesories + "!");
//moidfy the PJs that Thom is using
thomsCloset[1][2] = "Footie Pajamas";




//IV. Functions

//A. printGreeting

function printGreeting (name) {
    console.log("Hello there, " + name);
}

console.log(printGreeting("Slimer"));

//B. printCool
function printCool (name) {
    console.log(name + " is cool");
}
console.log(printCool('God Jessi'));


//C. calculateCube
function calculateCube(x) {
    let volume = x*x*x;
}

console.log(calculateCube(3));


//D.isVowel

function isVowelthat(string) {
    if (string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u' || string === 'A' || string === 'E' || string === 'I' || string === 'O' || string === 'U'){
        console.log("true");
    } else {
        console.log("false");
    }
}

isVowelthat('r');
isVowelthat('e');

//E. getTwoLengths 
function getTwoLengths(str, strings) {
    str = str.length;
    strings = strings.length;
}

console.log(isVowelthat("Matthew", "Stinks"));


//F.getMultipleLenghts
function getMultipleLenghts(arr){
    //empty array to store the lengths of the strings inside the array
    var emptyArray = [];
    for (var i = 0; i < arr.length; i++){
        emptyArray.push(arr[i].length);
    }
    return emptyArray;
}

console.log(getMultipleLenghts(["hello", "what", "is", "up", "dude"]));



//G. maxOfThree
function maxOfThree(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

console.log(maxOfThree(6,9,1));



//H. printLongestWord
function printLongestWord(arrayOfStrings){
    let word = "";
    let length1 = word.length;
    for (var i = 1; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > length1){
            word = arrayOfStrings[i];
            length1 = word.length;
        }
    }
    return word;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));