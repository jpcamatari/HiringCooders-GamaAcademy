//FizzBuzz
//Divisivel por 3 => 'Fizz'
//Divisivel por 5 => 'Buzz'
//Divisivel por 3 e 5 => 'FizzBuzz'
//Se não for um numero => 'Não é um numero'
//Se não for divisivel por 3 ou 5 => Entrada

let resultado = FizzBuzz(230)
console.log(resultado)

function FizzBuzz(entrada){
  if (typeof entrada !== 'number')  
    return 'Não é um numero'
  if ((entrada % 3 === 0) && (entrada % 5 === 0)) 
    return 'FizzBuzz'    
  if (entrada % 3 === 0)  
    return 'Fizz'
  if (entrada % 5 === 0) 
    return 'Buzz'
    
  return entrada

}
