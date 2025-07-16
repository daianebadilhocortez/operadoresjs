const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o seu nome? ", function(nomeUsuario) {
  console.log(`Bem-vindo à Calculadora de Combustível, ${nomeUsuario}!\n`);

  rl.question(`Agora diga, ${nomeUsuario}: Qual o consumo médio de combustível do seu veículo (km/l)? `, function(consumo) { // <-- alteração aqui (acrescentado km/l)
    let consumomedio = Number(consumo.replace(',', '.'));

    rl.question("Qual o valor do combustível (R$/litro)? ", function(valorcomb) { 
      let valorcombustivel = Number(valorcomb.replace(',', '.'));

      rl.question("Qual a distância que será percorrida (km)? ", function(distanciapercorrida) { 
        let distancia = Number(distanciapercorrida.replace(',', '.'));
   
        let litrosNecessarios = distancia / consumomedio; 
        
        let resultado = litrosNecessarios * valorcombustivel; 
        let resultadoFormatado = resultado.toFixed(2).replace('.', ',');

        console.log(`\nPerfeito, ${nomeUsuario}! Sua viagem de ${distancia} km custará aproximadamente R$ ${resultadoFormatado}.`);
        rl.close();
      });
    });
  });
});
