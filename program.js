//Test for formatting Strings
document.writeln('Hello, world! \n\tGood Bye World!');

//Test for if statement syntax
if (1<2)
{
	document.writeln('Yipee!'); 
}

//Test for declaring a String variable
var testString = 'Help!';
if (testString.length <= 5)
{
	document.writeln('Getchu betcha!')
}

//Test for declaring an integer variable
var testNum = 23;
testNum += 1;
if (testNum===24)
{ document.writeln('24');}

//Objects that have different components and things to them
var fullName = {
	"firstName": "Ethan",
	"middleName": "Patrick",
	"lastName": "Hancock"
	};
document.writeln(fullName); /*This will not print out the full name*/ document.writeln(fullName.firstName + ' ' + fullName.middleName + ' ' + fullName.lastName); //But this will
document.writeln(fullName.firstName);

//Declaring another fullName object
var fullName2 = Object.create(fullName); //Uses the Object from the previous example
	fullName2.firstName = 'Hayden';
document.writeln(fullName2.firstName + ' ' + fullName2.lastName);

//Test for coding on Github because babymode
document.writeln('Dab on that Hello World!");
