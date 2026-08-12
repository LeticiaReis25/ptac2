const produtos = [
  { id: 1, nome: 'Caneta', preco: 20 },
  { id: 2, nome: 'Caderno', preco: 7 },
  { id: 3, nome: 'Lapis', preco: 50 }
];

const produtosCaros = produtos.filter(produto => produto.preco > 5);

console.log(produtosCaros); 