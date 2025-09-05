document.addEventListener('DOMContentLoaded', () => {
  const btnAdicionar = document.getElementById('btnAdicionar');
  const btnRemover = document.getElementById('btnRemover');
  const btnExibir = document.getElementById('btnExibir');
  const comidaInput = document.getElementById('comida');
  const categoriaSelect = document.getElementById('categoria');
  const mensagem = document.getElementById('mensagem');
  const listaFinal = document.getElementById('listaFinal');

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

  btnAdicionar.addEventListener('click', () => {
    const comida = comidaInput.value.trim();
    const categoria = categoriaSelect.value;

    if (comida === '') {
      mensagem.textContent = 'Por favor, insira o nome da comida.';
      return;
    }

    listaDeCompras[categoria].push(comida);
    mensagem.textContent = `"${comida}" foi adicionado à categoria "${categoria}".`;
    comidaInput.value = '';
    exibirLista();
  });

  btnRemover.addEventListener('click', () => {
    const comida = comidaInput.value.trim();
    let removido = false;

    if (comida === '') {
      mensagem.textContent = 'Por favor, insira o nome da comida que deseja remover.';
      return;
    }

    for (const categoria in listaDeCompras) {
      const index = listaDeCompras[categoria].indexOf(comida);
      if (index > -1) {
        listaDeCompras[categoria].splice(index, 1);
        removido = true;
        break;
      }
    }

    if (removido) {
      mensagem.textContent = `"${comida}" foi removido da lista.`;
      comidaInput.value = '';
      exibirLista();
    } else {
      mensagem.textContent = `"${comida}" não foi encontrado na lista.`;
    }
  });

  btnExibir.addEventListener('click', () => {
    exibirLista();
  });

  function exibirLista() {
    listaFinal.innerHTML = '';
    let listaVazia = true;

    for (const categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        listaVazia = false;
        const h3 = document.createElement('h3');
        h3.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        const ul = document.createElement('ul');

        listaDeCompras[categoria].forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });

        listaFinal.appendChild(h3);
        listaFinal.appendChild(ul);
      }
    }

    if (listaVazia) {
      mensagem.textContent = 'A lista de compras está vazia.';
    }
  }
});
