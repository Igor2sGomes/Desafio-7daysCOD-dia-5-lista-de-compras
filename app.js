//lista de compras inicial
let listaDeCompras = {
    carnes: [],
    nãoPereciveis: [],
    frutas:[], 
    laticinios:[], 
    congelados:[], 
    doces:[],
    bebidas:[],
    outros:[]
} 
// Função para exibir a lista final agrupada
function exibirLista() {
  console.log("Lista de Compras Final:");
  for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:`);
      listaDeCompras[categoria].forEach(item => {
        console.log(`- ${item}`);
      });
    }
  }
}

// Loop principal
while (true) {
  let desejaAdicionar = prompt("Você deseja adicionar uma comida à sua lista de compras? (sim ou não)");

  if (!desejaAdicionar || desejaAdicionar.toLowerCase() === "não") {
    exibirLista();
    break;
  }

  if (desejaAdicionar.toLowerCase() === "sim") {
    let comida = prompt("Qual comida você deseja adicionar?");
    let categoria = prompt(
      "Em qual categoria essa comida se encaixa?  /n" +
      "Escolha entre: frutas, laticínios, congelados, doces, legumes, bebidas ou outros"
    ).toLowerCase();

    // Verifica se a categoria existe, senão coloca em 'outros'
    if (listaDeCompras.hasOwnProperty(categoria)) {
      listaDeCompras[categoria].push(comida);
    } else {
      alert("Categoria não reconhecida. Adicionando em 'outros'.");
      listaDeCompras.outros.push(comida);
    }

    alert(`"${comida}" foi adicionada à categoria "${categoria}".`);
  } else {
    alert("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
  }
}