import {question} from 'readline-sync'
console.log(`.... Soma de tres digitos ....`)

//Entrada
var valor_centena = Number(question('valor centena:     '))
var valor_dezena = Number(question('valor dezena:       '))
var valor_unidade = Number(question('valor unidade:     '))

//Processameto
var valor_total = valor_centena + valor_dezena + valor_unidade

//Saída
console.log(`C + D + U: ${valor_total}`)