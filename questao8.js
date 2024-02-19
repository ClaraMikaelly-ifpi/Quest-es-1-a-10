import{question} from 'readline-sync'
console.log(`.... a divisão da soma pela subtração ....`)

//Entrada
var soma = Number(question('soma:   '))
var subtracao = Number (question('subtracao:   '))

//Processamento
var soma = soma + subtracao
var subtracao = soma - subtracao
var divisao = soma / subtracao

//Saída
console.log(` o resultado da soma é: ${soma} `)
console.log(` o resultado da subtracao é: ${subtracao}`)
console.log(` o resultado da divisao é: ${divisao}`)