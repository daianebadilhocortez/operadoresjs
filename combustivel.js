
const precoCombustivel = 5.79;
const kmPorLitros = 10;
let distanciaEmKm = 1200;


const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));




