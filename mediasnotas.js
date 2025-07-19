//Algoritmo que dado as 3 notas tiradas na faculdade, calculo e imprima a sua média e a sua classificação conforme abaixo//

//Média = (nota 1 + nota 2 + nota 3) /3//

//Classificação: Média menor que 5, reprovção, média entre 5 e 7, recuperação, média acima de 7, passou de semestre//



let primeiraNota = 1;
let segundaNota = 7;
let terceiraNota = 1;

const mediaNotas = (primeiraNota + segundaNota + terceiraNota) /3;


if (mediaNotas < 5) {console.log ('A sua nota foi de', mediaNotas.toFixed(2),'pontos e você foi reprovado.') 

} else if (mediaNotas <= 7) {console.log ('A sua nota foi de', mediaNotas.toFixed(2),'pontos e você ficou de recuperação.') 

} else if (mediaNotas => 7) {console.log ('A sua nota foi de', mediaNotas.toFixed(2),'pontos e você passou de semestre.') 

}
