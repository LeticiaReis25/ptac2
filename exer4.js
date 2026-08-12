const produtos = [
  { id: 1, nome: 'Caneta', preco: 20 },
  { id: 2, nome: 'Caderno', preco: 7 },
  { id: 3, nome: 'Lapis', preco: 50 }
];


function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const produto = produtos.find(p => p.id === id);
      resolve(produto);
    }, 300);
  });
}

async function imprimirProduto() {
  const resultado = await buscarProduto(2);
  console.log(resultado);
}

imprimirProduto();