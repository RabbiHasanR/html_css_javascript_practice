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

function windowsAlert(){
	window.alert(5+6);
}

function consoleLog(){
	console.log(5+6);
}

function add2(){
	var x,y,z;
	x=10;
	y=10;
	z=x+y;
	document.getElementById('result').innerHTML=z;
}
