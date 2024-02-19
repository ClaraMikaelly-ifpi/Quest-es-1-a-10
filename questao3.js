import{question} from 'readline-sync'
console.log('.... Minutos equivale a Horas....')

//entrada
var valor_minutos = Number(question('valor em minutos: '))

//Processamento
var valor_horas = valor_minutos / 60

 //Saída
 console.log(` > ${valor_minutos} equivale a ${valor_horas}< `)