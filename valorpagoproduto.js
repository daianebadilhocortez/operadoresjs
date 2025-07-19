
let valorEtiqueta = 70; 

const descontoAVista = valorEtiqueta - (valorEtiqueta * 0.1);
const descontoDinheiroPix = valorEtiqueta - (valorEtiqueta * 0.15);
const descontoDuasParcelas = valorEtiqueta;
const jurosAcimaDuasParcelas = valorEtiqueta + (valorEtiqueta * 0.1);

let formadepagamento = "Mais de duas parcelas"




if (formadepagamento === "À vista") {console.log ('O valor do seu produto é R$', descontoAVista.toFixed(2).replace('.', ',')) 
}
 else if (formadepagamento === "Dinheiro/PIX") {console.log ('O valor do seu produto é R$', descontoDinheiroPix.toFixed(2).replace('.', ',')) 
} else if (formadepagamento === "Duas parcelas") {console.log ('O valor do seu produto é R$', descontoDuasParcelas.toFixed(2).replace('.', ',')) 
} else if (formadepagamento === "Mais de duas parcelas") {console.log ('O valor do seu produto é R$', jurosAcimaDuasParcelas.toFixed(2).replace('.', ',')) 
}