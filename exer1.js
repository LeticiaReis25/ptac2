const produtos = [
  { id: 1, nome: 'Caneta', preco: 20 },
  { id: 2, nome: 'Caderno', preco: 7 },
  { id: 3, nome: 'Lapis', preco: 50 }
];

const nomes = produtos.map(produto => produto.nome);

console.log(nomes);