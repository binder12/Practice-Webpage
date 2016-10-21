function Log_Prac(){

var x= document.getElementById("logic_x").value;

var ii, result;
if (x>10) {
	result= "pick another number"
}

else{
for (ii = 1; ii<=x; ii++) {
result = ( (ii % 2 == 1 || [1,2,3,5,7].includes(ii)) && (ii>=7));
	}
}

console.log(result);
document.getElementById("logic_html").innerHTML=result;

}
