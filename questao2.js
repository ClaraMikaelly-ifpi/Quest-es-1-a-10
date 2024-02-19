import {question} from 'readline-sync'
console.log('.... Horas equivale a minutos....')

//Entrada
var valor_horas = Number(question('Valor em horas:'   ))

//Processamento
var valor_minutos = valor_horas * 60

//Saída
console.log(`> ${valor_horas} equivale a ${valor_minutos}`)