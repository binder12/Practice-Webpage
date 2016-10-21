function Log_Prac(){

var x= document.getElementById("logic_x").value;

var ii, result;
if (x>10) {
	result= "pick another number"
}

else{
for (ii = 1; ii=x; ii++) {
result = ( [1,3,5,7,9].includes(ii) || [1,2,3,5,7].includes(ii));
	}
}

console.log(result);
document.getElementById("logic_html").innerHTML=result;

}
