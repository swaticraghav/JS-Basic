console.log('Hello World!');

/****************************/ 
/* Variables and data types */
/****************************/ 

/*

// String data type
var firstName =  'John';
console.log(firstName);  


// Boolean data type 
var isTrue =  true;
console.log(isTrue);

// Age data type
var age = 12;
console.log(age);

// Undefined data type
var unknown;
console.log(unknown);

// Undefined data type with value
unknown = 10;
console.log(unknown);

*/

/***************************************/ 
/* Variable Mutation and Type coercion */
/***************************************/

/*

// Type Coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'Twenty Eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his lastName?');
console.log(firstName + ' ' + lastName);

*/


/*******************/ 
/* Basic Operators */
/*******************/

/*

var birthYearJohn, birthYearMark;
now = 2021;
ageJohn = 28;
ageMark = 33;

// Math Operators
birthYearJohn = now - ageJohn;
birthYearMark = now - ageMark;

console.log(birthYearJohn + birthYearMark);

console.log(birthYearJohn + 10);
console.log(birthYearJohn - 10);
console.log(birthYearJohn * 10);
console.log(birthYearJohn / 10);

// Logical Operators
var isJohnElder = ageJohn > ageMark;
console.log(isJohnElder);

// typeof operator
console.log(typeof isJohnElder);
console.log(typeof 12);
console.log(typeof 'This is a string');
var x;
console.log(typeof x);

*/

/**********************/ 
/* Coding Challenge 1 */
/**********************/

/*

var heightMark, heightJohn, massMark, massJohn, bmiMark, bmiJohn, moreBMI;
heightMark = 1.69;
heightJohn = 1.95;
massMark = 78;
massJohn = 92;
    
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

moreBMI = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher then John\'s BMI? ' + moreBMI);

*/

/**********************/ 
/* If else statements */
/**********************/

/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.');
}

*/

/***************************/ 
/* Truthy and falsy values */
/***************************/

/*

var height;

// height= 23;
// height = 0;
// height  ='';

if(height){
    console.log('Value is defined.');
}else {
    console.log('Value is not defined');
}

*/

/***************************/ 
/* Equality Operators */
/***************************/

/*
var age = 28;

if(age === '28'){
   console.log('Result of ===');
}

if(age == '28'){
   console.log('Result of ==');
}

*/

/************************/ 
/* Coding Challenge - 2 */
/************************/

/*

AverageTeamA = (89 + 120 + 103)/3;
AverageTeamB = (116 + 94 + 123)/3;


switch(true) {
    case AverageTeamA > AverageTeamB:
            console.log('Team A is the winner');
            break;
    case AverageTeamA < AverageTeamB:
            console.log('Team B is the winner');
            break;
    default:
            console.log('It was a draw!');
            break;
}

AverageTeamC = (97 + 134 + 105)/3;

console.log(AverageTeamA, AverageTeamB, AverageTeamC);

switch(true) {
    case (AverageTeamA > AverageTeamB) && (AverageTeamA > AverageTeamC):
            console.log('Team A is the winner');
            break;
    case (AverageTeamA < AverageTeamB) && (AverageTeamC < AverageTeamB):
            console.log('Team B is the winner');
            break;
    case (AverageTeamA < AverageTeamC) && (AverageTeamB < AverageTeamC):
            console.log('Team C is the winner');
            break;
        
    case (AverageTeamA == AverageTeamC) && (AverageTeamB > AverageTeamA):
            console.log('Team B is the winner');
            break;
    case (AverageTeamA == AverageTeamC) && (AverageTeamB < AverageTeamA):
            console.log('A and C are the winners');
            break;
        
    case (AverageTeamA == AverageTeamB) && (AverageTeamC > AverageTeamA):
            console.log('Team C is the winner');
            break;
    case (AverageTeamA == AverageTeamB) && (AverageTeamC < AverageTeamA):
            console.log('A and B are the winners');
            break;
         
    case (AverageTeamB == AverageTeamC) && (AverageTeamB > AverageTeamA):
            console.log('Team B and C are the winners');
            break;
    case (AverageTeamB == AverageTeamC) && (AverageTeamB < AverageTeamA):
            console.log('A is the winner');
            break;
    default:
            console.log('It was a draw!');
            break;
}

*/

/*************/ 
/* Functions */
/*************/

/*

// Function 1
function calculateAge(birthYear) {
    return 2021 - birthYear;
}

var ageSwati = calculateAge(1994);
var ageShalvi = calculateAge(2004);
var ageShakshi = calculateAge(1999);

console.log(ageSwati, ageShalvi, ageShakshi);

// Function 2
function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John'); 

*/

/***************************************/ 
/* Function Statements and Expressions */
/***************************************/

/*
 // Function declaration
function fn1(argumentOne, argumentTwo) {}

// Function expression
var funVar = function(argumentOne, argumentTwo) {}

var sendName = function(firstName, lastName) {
    console.log('My name is ' + firstName + ' ' + lastName);
}

var sendNumber = function(number) {
    return 'My number is ' + number;
}

console.log(sendNumber(2));

*/

/**********/ 
/* Arrays */
/**********/

/*
// Initializa new array
var names = ['John', 'Mark', 'Roy'];
var years = new Array(1990, 1969, 1948);

console.log('First item of the array: ' + names[0]);
console.log('Entire array: ' + years);
console.log('Length of the array: ' + names.length);

// Mutating arrays - Array will now have empty items
names[5] = 'Mary';
console.log(names);

// To add only the last elements
years[years.length] = 2000;
console.log(years);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher'];

// adding element at the end
john.push('blue');
console.log(john);

// adding element at the start
john.unshift('U.S.');
console.log(john);

// remover the element from the end
john.pop();
console.log(john);

// remove the element from the start
john.shift();
console.log(john);

// getting index of an element
console.log(john.indexOf(1990));
console.log(john.indexOf(1991));


// index of -1 value
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);

*/

/************************/ 
/* Coding Challenge - 3 */
/************************/

/*
var bill = [124, 48, 268];
var totalBillCalculator = function(billValue) {
    var total;
    if(billValue < 50){
       total = 1.2 * billValue;
    } else if(billValue >= 50 && billValue < 200) {
        total = 1.15 * billValue;
    } else {
        total = 1.1 * billValue;
    }
    return total;
}

var totalBill = [totalBillCalculator(bill[0]), totalBillCalculator(bill[1]), totalBillCalculator(bill[2])];
console.log(totalBill);

*/

/**************************/ 
/* Objects and Properties */
/**************************/

/*

// Object Literal Syntax
var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1969,
    familyMembers: ['Snail', 'Owl', 'Rhino', 'Peacock']
};

console.log(john);
console.log(john.firstName);
console.log(john['yearOfBirth']);
var x = 'familyMembers';
console.log(john[x]);

// new Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Austin';
jane.yearOfBirth = 1890;

console.log(jane);

*/

/***********************/
/* Objects and Methods */
/***********************/

/*

var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1969,
    presentAge: function() {
        var date = new Date();
        return (date.getFullYear() - this.yearOfBirth);
    },
    // another way
    calcAge: function() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
    }
};

console.log(john);
console.log(john.yearOfBirth);
console.log(john.presentAge());

john.calcAge();
console.log(john.age);

*/

/**********************/
/* Coding Challenge 4 */
/**********************/

/*

var mark = {
    fullName: 'Mark Smith',
    mass: 60,
    height: 1.50,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.40,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
};

var bmiComparison = function(markBMI, johnBMI){
    if(markBMI > johnBMI){
       return 'Mark is the winner';
    } else if (markBMI < johnBMI) {
        return 'John is the winner';
    } else {
        return 'Noone is the winner';
    }
}

// we need to call below methods before we can call the bmi variable of the two objects
mark.calculateBMI();
john.calculateBMI();

console.log('Mark BMI - ' + mark.bmi + ', John BMI - ' + john.bmi);
console.log(bmiComparison(mark.bmi, john.bmi));

*/

/***********************/
/* loops and iteration */
/***********************/

/*

for(var i = 0; i < 10; i++){
    console.log('Value is - '+ i);
}


for(var i = 0; i < 10; i+=2){
    console.log('Value 2 is - '+ i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

// For loop
for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

*/

// continue and break statements 

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

*/


// reverse looping

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = john.length - 1; i >= 0; i--){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

*/

/************************/
/* Coding challenge - 5 */
/************************/

/*

var familyOne = {
    bill: [124, 48, 268, 180, 42],
    calculateTip: function() {
        // arrays  for all tips and total amount
        this.tipArray = new Array(this.bill.length);
        this.totalAmounts = new Array(this.bill.length);
        
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 50){
                this.tipArray[i] = 0.2 * this.bill[i];
            } else if(this.bill[i] < 200 && this.bill[i] >= 50) {
                this.tipArray[i] = 0.15 * this.bill[i];
            } else {
                this.tipArray[i] = 0.1 * this.bill[i];
            }
            this.totalAmounts[i] = this.bill[i] + this.tipArray[i];
        }
    }
};

familyOne.calculateTip();
console.log(familyOne.tipArray);
console.log(familyOne.totalAmounts);

var familyTwo = {
    bill: [77, 475, 110, 45],
    calculateTip: function() {
        // arrays  for all tips and total amount
        this.tipArray = new Array(this.bill.length);
        this.totalAmounts = new Array(this.bill.length);
        
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 100){
                this.tipArray[i] = 0.2 * this.bill[i];
            } else if(this.bill[i] < 300 && this.bill[i] >= 100) {
                this.tipArray[i] = 0.1 * this.bill[i];
            } else {
                this.tipArray[i] = 0.25 * this.bill[i];
            }
            this.totalAmounts[i] = this.bill[i] + this.tipArray[i];
        }
    }
}

familyTwo.calculateTip();
console.log(familyTwo.tipArray);
console.log(familyTwo.totalAmounts);


var calculateAverage = function(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

var averageTipFamilYOne = calculateAverage(familyOne.tipArray);
var averageTipFamilYTwo = calculateAverage(familyTwo.tipArray);

console.log('Average tip for family One - ' + averageTipFamilYOne);
console.log('Average tip for family two - ' + averageTipFamilYTwo);
 
if(averageTipFamilYOne > averageTipFamilYTwo){
    console.log('Family 1 paid more tip - ' + averageTipFamilYOne);
} else if (averageTipFamilYOne < averageTipFamilYTwo) {
    console.log('Family 2 paid more tip - ' + averageTipFamilYTwo);
} else {
    console.log('Both paid same amount');
}

*/

/************************/
/* Hoisting */
/************************/


// For functions
/*

// For function decaartion
// this will work
calAge(1990);
function calAge(year) {
    console.log(2030 - year);
}
// this will work
calAge(1990);

// For function expression
// this will not work
// age(1990);
var age = function(year) {
    console.log(2030 - year);
}
// this will work
age(1990);

*/

// For variables

/*

// this will not work
console.log(a);

var a = 10;
// this will work
console.log(a);

// var b = 20;
console.log(b);

*/

// variables and functions

/*

var c = 30;

function foo() {
    var c = 20;
    console.log(c);
}

foo();
console.log(c);

*/

/***************************/
/* Scoping and scope chain */
/***************************/

/*

var a = 'hello!';
first();

function first() {
    var b = 'hey!';
    second();
    
    function second() {
        var c = 'hi';
        console.log(a + b + c);
    }
}

*/

/*************************************/
/* Execution context and scope chain */
/*************************************/ 

/*

var a = 'hello';
first();

function first() {
    var b = 'hi';
    second();
    
    function second() {
        var c = 'hey!';
        third();
    }
}

function third() {
    var d = 'bye!';
    console.log(c);
}

*/

/********************/
/* The this keyword */
/********************/

/*

console.log(this);

first();

function first() {
    console.log(this);
}

var john = {
    firstName: 'John',
    yearOfBirth: 1990,
    calAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function second() {
            console.log(this);
        }
        second();
    }
}

john.calAge();

*/

/********************/
/* Method Borrowing */
/********************/

var john = {
    firstName: 'John',
    yearOfBirth: 1990,
    calAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
    }
}

john.calAge();

var mike = {
    firstName: 'Mike',
    yearOfBirth: 1980,
}

mike.calAge = john.calAge;
mike.calAge();







