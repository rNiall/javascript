// Lecture: variables
/*
var name = 'Niall';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 25;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: variables 2
/*
var name = 'Niall';
var age = 25;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'student';
isMarried = false;

console.log(name + ' is a ' + age + ' years ' + job + '. Is he married? ' + isMarried + '.');

age = 'twenty five';
job = 'diver';

console.log(name + ' is a ' + age + ' years ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name');
console.log(lastName);

alert(name + ' is a ' + age + ' years ' + job + '. Is he married? ' + isMarried + '.');
*/

/*
//Operators
var now = 2016;
var birthYear = now - 25;

birthYear = now - 26*2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

// if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;
/*
if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}
*/
/*
if (isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print');
}
*/

//boolean logic and switch

// var age = 20;
//
// if (age < 20) {
//     console.log('John is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log('John is a young man');
// }
// else {
//     console.log('John is a man');
// }
//
// var job = 'student';
//
// job =  prompt('What does John do');
//
// switch (job) {
//     case 'student':
//         console.log('John studies JS');
//         break;
//     case 'driver':
//         console.log('John drives a cab in Lisbon');
//         break;
//     case 'cop':
//         console.log('John helps fight crime');
//         break;
//     default:
//         console.log('John does something else');
// }



// var  ageJohn = 20;
// var ageMark = 18;
// var ageNiall = 25;
// var heightJohn = 175;
// var heightMark = 170;
// var heightNiall = 176;
// var scoreJohn = heightJohn + ageJohn * 5;
// var scoreMark = heightMark + ageMark * 5;
// var scoreNiall = heightNiall + ageNiall * 5;
//
// if (scoreJohn > scoreMark && scoreJohn > scoreNiall) {
//     console.log('John wins and his score is ' + scoreJohn);
// } else if (scoreNiall > scoreJohn && scoreNiall > scoreMark) {
//     console.log('Niall wins and his score is ' + scoreNiall);
//
// } else if (scoreMark > scoreJohn && scoreMark > scoreNiall) {
//     console.log('Mark wins and his score is ' + scoreMark);
// } else {
//     console.log('It\'s a draw');
// }


//Functions

// function calculateAge(yearOfBirth) {
//     var age = 2017 - yearOfBirth;
//     return age;
// }
//
// var ageJohn = calculateAge(1991);
// var ageMark = calculateAge(1968);
// var ageNiall = calculateAge(1972);
//
//
// function yearsUntilRetrement(name, year) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//
//     if (retirement >= 0){
//         console.log(name + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(name + ' has already retire.');
//     }
//
// }
//
// yearsUntilRetrement('John', 1990);
// yearsUntilRetrement('Mark', 1969);
// yearsUntilRetrement('Mary', 1948);



// Statements and expressions


function someFun(par) {
    //code
}

var someFun = function (par) {
    //code
};


//Expressions
3+4;
var x = 3;

//statements
if (x === 5) {
    //do something
}

///////////////////////
//Arrays/////////////
////////////////////

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array (1990,1969, 1948);
//
// console.log(names[1]);
// names[1] = 'Ben';
// console.log(names[1]);
//
// var john = ['John', 'Smith', 1990, 'student', false];
//
// john.push('red');
// john.unshift('Mr.');
// john.pop();
// john.shift();
//
// console.log(john);
//
// console.log(john.indexOf('Smith'));
// if (john.indexOf('teacher') === -1) {
//     console.log('John is NOT a teacher');
// }


///////////////////////////
//// Objects

var john  = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name ='Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);














