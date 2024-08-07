const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite a temperatura em celsius:"));

const fahrenheit = (celsius * 9/5) + 32

console.log("A temperatura em fahrenheit é: ", fahrenheit);
