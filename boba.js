function umnoj()
{
	var num1,num2,result,result1;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);


	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
   

	result1 = num1*num2;

	document.getElementById('result').innerHTML = result1;
}