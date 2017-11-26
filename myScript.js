function myFunction(){
	document.getElementById('demo').innerHTML='Hi i am rabbi';
}
function add(){
	document.getElementById('demo1').innerHTML=5+6;
}
/*The document.write() method should only be used for testing*/
function add1(){
	document.write(5+6);
}
/*
function windowsAlert(){
	window.alert(5+6);
}

function consoleLog(){
	console.log(5+6);
}
/* javascript syntex example*/
/*JavaScript statements are separated by semicolons:
In HTML, JavaScript programs are executed by the web browser.*/
function add2(){
	var x,y,z;
	x=10;
	y=10;
	z=x+y;
	document.getElementById('result').innerHTML=z;
}
/*The JavaScript syntax defines two types of values: Fixed values and variable values.

Fixed values are called literals. Variable values are called variables.*/

/*The most important rules for writing fixed values are:

Numbers are written with or without decimals:*/
function fixedVariable(){
	document.getElementById('show').innerHTML=10.50;
	
}
/*Strins are text,written within double or single qutation*/
function stringFixedVariable(){
	document.getElementById('string').innerHTML="Rabbi";
}

/* javaScript variables */
/*In a programming language, variables are used to store data values.

JavaScript uses the var keyword to declare variables.

An equal sign is used to assign values to variables.*/

function variable(){
	var x;
x = 6;
document.getElementById("variable").innerHTML = x;
}

/* javaScript operation,expresion example*/
//An expression is a combination of values, variables, and operators, which computes to a value.

//The computation is called an evaluation.

function operation(){
	var x,y,z,total;
	x=5; y=5; z=2;
		//array in javascript
	/*
	*JavaScript arrays are written with square brackets.

Array items are separated by commas.
	*
	*/
	total=(x+y)*z;
	document.getElementById('operation').innerHTML=total +"John" + " "  + "Doe";
}

function dataType(){
	//boolean data type example in javascript
	
	var a=5,b=5,c=6;
	var array1=["Rabbi","Tuhin","Zohan","Piash"];
	//JavaScript objects are written with curly braces.

    //Object properties are written as name:value pairs, separated by commas.
	
	var person={firstName:"Nayem",lastName:"Hossain",age:"23",eyeColor:"blue"};
	
	
	//You can use the JavaScript typeof operator to find the type of a JavaScript variable.
	
	//In JavaScript, a variable without a value, has the value undefined. The typeof is also undefined.
	var car;
	//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
	var car2;
	//An empty value has nothing to do with undefined.

     //An empty string has both a legal value and a type.
	 //In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

      //Unfortunately, in JavaScript, the data type of null is an object.
	 
	 var cat="";
	 var name=null;
	 //You can also empty an object by setting it to undefined:
	 var person1 = {firstName1:"John", lastName1:"Doe", age1:50, eyeColor1:"blue"};
person1 = undefined;

//difference of undefined and null.Undefined and null are equal in value but different in type
	document.getElementById("dataType").innerHTML=(a==b)+"<br>"+(a==c)+"<br>"+array1+"<br>"+array1[2]+"<br>"+person.firstName+ "is" +person.age+ "years old"+"<br>"+typeof"RabbiHasan"+typeof 12+typeof 12.555+"<br>"+car+" "+car2+"<br>"+"Cat is :"+cat+" "+typeof cat+"<br>"+typeof name+"<br>"+person1+"<br>"+typeof undefined+"<br>"+typeof null+"<br><br>"+(null===undefined)+"<br>"+(null==undefined);
	

	
	
	//document.getElementById("dataType").innerHTML=array1;
	
}

function dataType2(){
	/*A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined*/

document.getElementById("dataType2").innerHTML = 
typeof "john" + "<br>" + 
typeof 3.14 + "<br>" +
typeof true + "<br>" +
typeof false + "<br>" +
typeof x;
}

function complextDataType(){
	document.getElementById("complexData").innerHTML = 
typeof {name:'john', age:34} + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof null + "<br>" +
typeof function myFunc(){};
}

//return type function example

function returnType(a,b){
	return a*b;
}

function multiple(){
	document.getElementById("function").innerHTML=returnType(5,6);
}

function toCelsius(fahrenheit){
	return (5/9)*(fahrenheit-32);
}

function convater(){
	document.getElementById("convater").innerHTML=toCelsius(80);
}

function letExample(){
	let t =  "Rabbi" ; 
	console.log(t);
}
function generateARandom(){
	let randomNumber = Math.random()*10; 
	console.log(parseInt(randomNumber));
}

//javascript object example..javascript also assign function in object

function objectExample(){
	var person={
		firstName:"Rabbi",
		lastName:"hasan",
		id:1199,
		fullName:function(){
			return this.firstName+" "+this.lastName;
		}
	}
	
	document.getElementById("object").innerHTML=person.fullName();
}
//string example
function stringExample(){
	var alphabet="abcdefghijklmnopqrstuvwxyz";
	var str="Please locate where locate occurs";
	//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
	//Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.
	//JavaScript counts positions from zero.
    //0 is the first position in a string, 1 is the second, 2 is the third ...
	
	
	var pos=str.indexOf("locate");
	//The search() method searches a string for a specified value and returns the position of the match:
	var searchResult=str.search("where");
	
	document.getElementById("length").innerHTML=alphabet.length+"<br>"+pos+"<br>"+searchResult;
	
}

function stringMethod(){
	var txt="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//length property returns the string length
	var length=txt.length;
	
	//the indexOf() method returns the indexOf(the position of) the first occurrence of a specified text in a string
	var str="Please locate where 'locate' occurs!";
	var pos=str.indexOf("where");
	//the lastIndexOf() method returns the index of the lastoccurence of a specified text in a string
	//Both the indexOf(), and the lastIndexOf() methods return -1 if the text is not found.
	//JavaScript counts positions from zero.
	var pos2=str.lastIndexOf("locate");
	//both methods accept a second parameter as the starting position for the search
	var withIndex=str.indexOf("locate",15);
	//the search() method searches a string for a specified value and returns the position of the match
	var searchPosition=str.search("occurs");
	//the search() method cannot take a second start position arguments
	//the search() method can take much more powerful search values(regular expresion)
	
	
	/*
	there are 3 methods for extracting a part of a string:
	1:slice(star,end)
	2:substring(start,end)
	3:substr(start,length)
	*/
	
	var str2="Apple, Banana, kiwi";
	var res=str2.slice(7,13);
	//if a parameter is negative,the position is conuted from the end of the string
	var res2=str2.slice(-12,-6);
	//if you give on perameter the method slice befor position word
	var res3=str2.slice(7);
	
	//substring() is similar to slice()..the difference is that substring() cannot accept negative indexes.
	var res4=str2.substring(7,13);
	
	//substr() is similar to slice()..the difference is that the second parameter specifies the length of the extracted part..
	
	var res5=str2.substr(15,4);
	
	//the replace() method replace a specified value with another value in a string
	var str3="Please visit Microsoft!";
	var replaceString=str3.replace("Microsoft","W3School");
	//the replace() method does not change the string it is called on.It returns a new string
	//by default,the replace()function replace only the first match
	var str4="Please visit Microsoft and Microsoft!"
	var replaceString1=str4.replace("Microsoft","Udacity");
	
	//to replace all matches use a regular expression with a /g flag(global match)
	//the replace() function is case sensitive.Writing MICROSOFT (with upper case) will not work
	var replaceAllSameString=str4.replace(/Microsoft/g,"W3School");
	
	//to replace case insensitive use regular expression /i flag(insansitive)
	var replaceAllSameString1=str3.replace(/MICROSOFT/i,"W3School");
	
	//Converting to upper and lower case 
	//a string is converted to upper case with toUpperCase()
	
	var text1="Rabbi Hasan";
	var convertLowerToupperCase=text1.toUpperCase();
	//a string is converted to lower case with toLowerCase()
	
	var convertUpperToLowerCase=text1.toLowerCase();
	
	/*there are 2 safe methods for extracting string character
	1:charAt(position)
	2:charCodeAt(position)
	*/
	
	//the charAt()method returns the character at a specified index(position) is a string
	var returnCharacter=text1.charAt(0);
	//the charCodeAt() method returns the unicode of the character at a specified index in a string
	
	var returnUnicode=text1.charCodeAt(0);
	
	document.getElementById("stringMethod").innerHTML="Length:"+length+"<br>"+"IndexOfString:"+pos+"<br>"+"LastIndexOf:"+pos2+"<br>"+withIndex+"<br>"+"SearchPositon:"+searchPosition+"<br>"+"Slice with positive position:"+res+"<br>"+"Slice with negative position:"+res2+"<br>"+"slice with one perameter:"+res3+"<br>"+"sub string:"+res4+"<br>"+"substr:"+res5+"<br>"+"Replace String:"+replaceString+"<br>"+replaceString1+"<br>"+"Replace All Same String:"+replaceAllSameString+"<br>"+"replace case insensitive:"+replaceAllSameString1+"<br>"+"convertLowerToupperCase:"+convertLowerToupperCase+"<br>"+"convertupperTolowerCase:"+convertUpperToLowerCase+"<br>"+"returnCharacter:"+returnCharacter+"<br>"+"return to character unicode:"+returnUnicode;
}

function numberExample(){
	var myNumber=128;
	//convert hexadecimal(16),octal(8) and binary(2)
	document.getElementById("number").innerHTML = "128 = " + 
myNumber + " Decimal, " +
myNumber.toString(16) + " Hexadecimal, " +
myNumber.toString(8) + " Octal, " +
myNumber.toString(2) + " Binary.";
}

function numberMethod(){
	//toString() returns a nmber as a string.
	//all number methods can be used on any type of numbers(literals,variable,expresion)
	
	var x=123;
	document.getElementById("numberMethod").innerHTML ="toString() method example:"+"<br>"+x.toString() + "<br>" +(123).toString() + "<br>" +(100 + 23).toString();
   
   //toExponential() returns a string,with a number rounded and written using exponential notation
   //a parameter defines the number of charactes behind the decimal point
   var y=9.656;
   document.getElementById("numberMethod1").innerHTML="toExponential() method example:"+"<br>"+y.toExponential()+"<br>"+y.toExponential(2)+"<br>"+y.toExponential(4)+"<br>"+y.toExponential(6);
   
   //toFixed() returns a string with the number written with specified number of decimals.
   document.getElementById("numberMethod2").innerHTML="toFixed() method example:"+"<br>"+y.toFixed()+"<br>"+y.toFixed(0)+"<br>"+y.toFixed(2)+"<br>"+y.toFixed(4)+"<br>"+y.toFixed(6);
   
   //toPrecision() return a string with a number written with a specified length
   document.getElementById("numberMethod3").innerHTML="toPrecision() method example:"+"<br>"+y.toPrecision()+"<br>"+y.toPrecision(2)+"<br>"+y.toPrecision(4)+"<br>"+y.toPrecision(6);
   //valueOf() returns a number as a number
   //The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
   document.getElementById("numberMethod4").innerHTML="valueOf() method example:"+"<br>"+x.valueOf()+"<br>"+y.valueOf()+"<br>"+(123).valueOf()+"<br>"+(100+23).valueOf();
   /*
   
   There are 3 JavaScript methods that can be used to convert variables to numbers:

The Number() method
The parseInt() method
The parseFloat() method

These methods are not number methods, but global JavaScript methods.
   */
   
   //the Number() methods can be used to convert JavaScript variables to numbers:
   document.getElementById("numberMethod5").innerHTML="Number() method example:"+"<br>"+Number(true)+"<br>"+Number(false)+"<br>"+Number(new Date())+"<br>"+Number(" 10")+"<br>"+Number("10 ")+"<br>"+Number("10 6");
   //parseFloat() parses a string and return a number.space are allowed only the first number is returned
   
   document.getElementById("numberMethod6").innerHTML="parseFloat() method example:"+"<br>"+parseFloat("10")+"<br>"+parseFloat("10.33")+"<br>"+parseFloat("10 20 30")+"<br>"+parseFloat("10 years")+"<br>"+parseFloat("years 10");
   //parseInt() parse a string and returns whole number.spaces are allowed.only the first number is returned
   document.getElementById("numberMethod7").innerHTML="parseInt() method example:"+"<br>"+parseInt("10")+"<br>"+parseInt("10.33")+"<br>"+parseInt("10 20 30")+"<br>"+parseInt("10 years")+"<br>"+parseInt("years 10");
   
}
//form validation
function validateForm(){
	var x=document.forms["myForm"]["fname"].value;
if(x==""){
	alert("Name must be filled out");
	return false;
}

}

//numeric number validation

function myFunction(){
	var x,text;
	//get the value of the input field with id="numb"
	x=document.getElementById("numb").value;
	
	//if x is not number or less than one or greater than 10
	
	if(isNaN(x)||x<1||x>10){
		text="input not valid";
	}
	else{
		text="input ok";
	}
	document.getElementById("demo").innerHTML=text;
}

//constraint validation DOM method
//checkValidity() returns the returns true if the input element contains valid data
//setCustomValidity() sets the validationMessage property of an input element

function constraintValidation(){
	var inpObj=document.getElementById("id1");
	
	if(inpObj.checkValidity()==false){
		document.getElementById("demo1").innerHTML=inpObj.validationMessage;
	}
	else{
		document.getElementById("demo1").innerHTML="input OK";
	}
}