// FORMULA IMC: PESO/(ALTURA * ALTURA)//
//MOSTRAR A CONDIÇÃO DE ACORDO COM A TABELA://
//IMC CONDIÇÃO: abaixo de 18.5 = abaixo do peso; entre 18.5 e 25 = peso normal; entre 25 e 30 acima do peso; entre 30 e 40 obeso; acima de 40 obesidade grave;



let pesoKilos = 70; 
let alturaMetros = 1.63;


const valorIMC = pesoKilos / Math.pow(alturaMetros, 2);


if (valorIMC < 18.5) {console.log ('O seu IMC é igual a ', valorIMC.toFixed(1).replace('.', ','),'e você está abaixo do peso.') 

} else if (valorIMC < 25) {console.log ('O seu IMC é igual a ', valorIMC.toFixed(1).replace('.', ','),'e o seu peso é normal.') 

} else if (valorIMC < 30) {console.log ('O seu IMC é igual a ', valorIMC.toFixed(1).replace('.', ','),'e você está acima do peso.') 

} else if (valorIMC < 40) {console.log ('O seu IMC é igual a ', valorIMC.toFixed(1).replace('.', ','),'e a sua condição é obseso.') 

} else if (valorIMC >= 40) {console.log ('O seu IMC é igual a ', valorIMC.toFixed(1).replace('.', ','),'e a sua condição é obsesidade grave.') 
}