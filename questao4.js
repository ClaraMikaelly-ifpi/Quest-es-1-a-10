import { question } from 'readline-sync'
console.log(`.... Dolar a ser convertido em reais ....`)

//Entrada
var dolar = Number(question(' Valor da cotacao do dolar:  '))
var valor = Number(question(' Valor em dolar a ser covertido:  '))


//Processamento
var valor_real = valor * dolar

//Saída
console.log(`O valor de ${valor} dólares é de ${valor_real.toFixed(2)} reais ` )