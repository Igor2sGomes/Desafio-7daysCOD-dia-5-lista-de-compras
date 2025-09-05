// Lista de compras inicial
let listaDeCompras = {
  carnes: [],
  naoPereciveis: [],
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  legumes: [],
  bebidas: [],
  outros: []
};

// Função para exibir a lista final agrupada
function exibirLista() {
  let resultado = "📋 Lista de Compras Atual:\n\n";

  for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      let titulo = categoria
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase());

      resultado += `${titulo}:\n`;
      listaDeCompras[categoria].forEach(item => {
        resultado += `- ${item}\n`;
      });
      resultado += "\n";
    }
  }

  if (resultado === "📋 Lista de Compras Atual:\n\n") {
    return "🛒 A lista está vazia!";
  }

  return resultado;
}

// Função para verificar se existe pelo menos 1 item
function listaNaoVazia() {
  return Object.values(listaDeCompras).some(arr => arr.length > 0);
}

// Loop principal
while (true) {
  let desejaFazer = prompt(
    "Você deseja:\n" +
    "- adicionar uma comida (digite: adicionar)\n" +
    (listaNaoVazia() ? "- remover uma comida (digite: remover)\n" : "") +
    "- sair (digite: sair)"
  );

  if (!desejaFazer || desejaFazer.toLowerCase() === "sair") {
    alert(exibirLista());
    break;
  }

  if (desejaFazer.toLowerCase() === "adicionar") {
    let comida = prompt("Qual comida você deseja adicionar?");

    let categoria = prompt(
      "Em qual categoria essa comida se encaixa?\n\n" +
      "Escolha entre:\n" +
      "- carnes\n" +
      "- naoPereciveis\n" +
      "- frutas\n" +
      "- laticinios\n" +
      "- congelados\n" +
      "- doces\n" +
      "- legumes\n" +
      "- bebidas\n" +
      "- outros"
    ).toLowerCase();

    if (listaDeCompras.hasOwnProperty(categoria)) {
      listaDeCompras[categoria].push(comida);
    } else {
      alert("⚠️ Categoria não reconhecida. Adicionando em 'outros'.");
      listaDeCompras.outros.push(comida);
    }

    alert(`✅ "${comida}" foi adicionada à categoria "${categoria}".`);
  }

  else if (desejaFazer.toLowerCase() === "remover" && listaNaoVazia()) {
    alert(exibirLista());
    let itemRemover = prompt("Digite o nome exato do item que deseja remover:");

    let encontrado = false;
    for (let categoria in listaDeCompras) {
      let index = listaDeCompras[categoria].indexOf(itemRemover);
      if (index !== -1) {
        listaDeCompras[categoria].splice(index, 1);
        encontrado = true;
        alert(`🗑️ "${itemRemover}" foi removido da lista!`);
        break;
      }
    }

    if (!encontrado) {
      alert("❌ Não foi possível encontrar o item dentro da lista!");
    }
  }

  else {
    alert("⚠️ Opção inválida. Tente novamente.");
  }
}
