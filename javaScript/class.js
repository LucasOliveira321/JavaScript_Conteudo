
function calculaSalarioHoraRound(salario, hora){

	const salarioPorHora = (salario/hora);

	return Math.round(salarioPorHora);
}

function calculaSalarioHoraToFixed(salario, hora){

	const salarioPorHora = (salario/hora);

	const rshora = salarioPorHora.toFixed(2);
	
	return rshora;
}

// style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

// decimal para representar números simples.

// currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

// percent para formato percentual.

function calculaSalarioHoraRS(salario, hora){

	const salarioPorHora = (salario/hora);

	const rshora = salarioPorHora.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
	
	return rshora;
}

console.log(calculaSalarioHoraRound(5000,176), + calculaSalarioHoraToFixed(5000,176), +  "calculaSalarioHoraRS(5000,176)");
