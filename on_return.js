function on_return()
{

var Person ={};
var Name= {};
Person.Name= Name;
var Address= {};
Person.Address= Address;
var Col= {};
Person.Col= Col;

function FirstName(){
//var fname= new Object();
return document.getElementById("fname").value;
console(fname);
}

function LastName(){
//var lname= new Object();
return  document.getElementById("lname").value;
}

Name.fname = FirstName(); 
Name.lname = LastName(); 

function Ad(){
//var lname= new Object();
return  document.getElementById("address").value;
}

function Color(){
//var lname= new Object();
return  document.getElementById("favcol").value;
}

Address.street = Ad();
Col.fcolor = Color();

var person_string= JSON.stringify(Person);
console.log(JSON.parse(person_string));
console.info(Person);

var mydiv = document.getElementById("divi");
var x= document.createElement("p");

x.className = "mystyle";
//return document.getElementById("name").value;


var t= document.createTextNode("Hi " + Person.Name.fname +" "+ Person.Name.lname);
//var t = FirstName();
//var t = return document.getElementById("name").value;


x.appendChild(t)
mydiv.appendChild(x);

}

