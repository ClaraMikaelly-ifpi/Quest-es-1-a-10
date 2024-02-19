import {question} from 'readline-sync'
console.log('.... conversor de m/s para km/h....')

//Entrada
var velocidade_ms = Number(question('Velocidade em ms: '))

//Processamento
var velocidade_kmh = velocidade_ms * 3.6

//Saída 
console.log(`> ${velocidade_ms}m/s equival a ${velocidade_kmh}km/h`)