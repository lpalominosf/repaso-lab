/*
Calcular el sueldo semanal de un trabajador
con base en las horas que trabaja 
ej: Carol gana 10000 por hora y 
trabaja 20 horas a la semana 
200000
*/

function salaryWeek(hours, payment){
    var salary = hours * payment;
    return salary;
}

function salaryWeek(hours, payment){
	var salary = hours * payment;
	return salary;
}

/*
Calcular la cantidad de digitos de un
numero por ej: 1986, debera retornar 4
*/

function numberOfDigits(number){
	var counter = 0;
	var digits = number.toString(); // "1986"
	for (var i = 0; i < digits.length; i++){
		counter++;
	}
	return counter;
}

// i+=2 es lo mismo que i=i+2
// i++ es igual a i=i+1 

function palindrome(word){
	//var min = word.toLowerCase(); -> convertira los caracteres que ingrese el usuario en minuscula
	var long = word.length;
	for (var i = 0; i < long; i++) {
		if(word[i] !== word[long - 1 - i]){
			return false;
		} 

	}
	return true;
}