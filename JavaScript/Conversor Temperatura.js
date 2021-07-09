//Conversor de Celsus para Fahrenheit

function conversorTemp(valor) {
  return valor * 1.8 + 32
}
let resultado = conversorTemp(100)

console.log(`O valor em Fº é de ${resultado}`)
