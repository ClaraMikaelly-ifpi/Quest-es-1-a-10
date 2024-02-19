import {question} from 'readline-sync'
console.log('.... conversor de km/h para m/s....')

//Entrada
var velocidade_kmh = Number(question('velocidade_kmh:  '))

//Processamento
var velocidade_ms = velocidade_kmh / 3.6

//Saída 
console.log(`>>> ${velocidade_kmh} equivale a ${velocidade_ms} <<<`)
