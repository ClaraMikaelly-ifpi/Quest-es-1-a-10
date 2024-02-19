import { question } from 'readline-sync'
console.log(`.... a soma dos 2 primeiros e a diferença entre os 2 últimos ....`)

//Entrada
const numero1 = Number(question('numero1:  '))
const numero2 = Number(question('numero2:  '))
const numero3 = Number(question('numero3:  '))

//Processo
const valor_inicio = numero1 + numero2
const valor_final = numero2 - numero3

//Saída
console.log(`numero1 + numero2: ${valor_inicio}`)
console.log(`numero2 - numero3: ${valor_final}`)