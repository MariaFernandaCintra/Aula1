const prompt = require('prompt-sync')();

let Array = [];

let tamanho = parseFloat(prompt("Digite o tamanho da sua lista: "));

for(let i = 0; i < tamanho; i++){
    let numero = parseFloat(prompt("Digite um numero para inserir na sua lista: "));
    Array.push(numero);
}

console.log(Array);

