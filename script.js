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

var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');
}
else {
    console.log('John is a man');
}

var job = 'student';

job =  prompt('What does John do');

switch (job) {
    case 'student':
        console.log('John studies JS');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}



