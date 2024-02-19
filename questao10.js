import{question} from 'readline-sync'
console.log('.... Calcule e escreva o quociente e o resto da divisao do primeiro pelo segundo.... ')

//Entrada
var numero1 = Number(question('Primeiro Numero:   '))
var numero2 = Number(question('Segundo Numero:    '))

//Processamento
var divisao = Math.floor(numero1 / numero2)
var resto = numero1 % numero2

//Saída
console.log(`Divisao:${divisao} ;Resto:${resto}`)