//Programa para calcular o valor da viagem//

//Você terá 5 variáveis. Sendo elas://

//1 - Preço do etanol, 2- Preço da gasolina, 3 - O tipo de combustível que está no seu carro, 4- Gasto médio do combustível do carro por KM e 5 - distancia em KM da viagem;//





const precoGasolina = 6;
const precoEtanol = 3;
const kmPorLitros = 10;
let distanciaEmKm = 100;
const isGasolina = true;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGastoGasolina = litrosConsumidos * precoGasolina;
const valorGastoEtanol = litrosConsumidos * precoEtanol;



if (isGasolina) {console.log ('A sua viagem de', distanciaEmKm,'KM,','utilizando gasolina será de R$', valorGastoGasolina.toFixed(2)) 

} else {console.log ('A sua viagem de', distanciaEmKm,'KM,','utilizando etanol será de R$', valorGastoEtanol.toFixed(2))}


