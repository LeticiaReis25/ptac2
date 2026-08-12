const produtos = [
  { id: 1, nome: 'Caneta', preco: 20 },
  { id: 2, nome: 'Caderno', preco: 7 },
  { id: 3, nome: 'Lápis', preco: 50 }
];

const nomesBaratos = produtos
  .filter(produto => produto.preco <= 5) 
  .map(produto => produto.nome);         
console.log(nomesBaratos); 