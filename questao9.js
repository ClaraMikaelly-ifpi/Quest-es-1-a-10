import{question} from 'readline-sync'
console.log('.... Leia determinados numeros e escreva o seu inverso....')

//Entrada
const numeros = Number(question('Numero:  '))

//Processamento
var dezenas = Math.floor(numeros / 10)
var unidades = resto % 10

var inverso = dezenas*10 + centenas
//Saída
console.log(` o numero inteiro: ${numero}`)
console.log(` o numero inverso: ${inverso}`)