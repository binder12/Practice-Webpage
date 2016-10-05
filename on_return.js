function on_return()
{

var Person = new Object();

function FirstName(){
//var fname= new Object();
return document.getElementById("fname").value;
console(fname);
}

function LastName(){
//var lname= new Object();
return  document.getElementById("lname").value;
}

Person.fname = FirstName(); 
Person.lname = LastName(); 

var person_string= JSON.stringify(Person);
console.log(JSON.parse(person_string));

var mydiv = document.getElementById("divi");
var x= document.createElement("p");

x.className = "mystyle";
//return document.getElementById("name").value;


var t= document.createTextNode("Hi " + Person.fname +" "+ Person.lname);
//var t = FirstName();
//var t = return document.getElementById("name").value;


x.appendChild(t)
mydiv.appendChild(x);

}

