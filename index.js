/*Desenvolva uma solução para calcular o salário liquído de um funcionário. Para isso, você deverá
levar em consideração a nova tabela de descontos do INSS.  */
//const prompt = require('prompt-sync')() !Não é necessário o prompt, era só um teste antes do DOM!

const form = document.querySelector('#form');
const salario = document.querySelector('#salario');
const mostrarSalario = document.querySelector('#mostrarSalario');


form.addEventListener('submit', function calcularSalarioLiquido(event) {
  let salarioLiquido = 0
  const salarioBruto = salario.value

  if (salarioBruto <= 1320) {
    salarioLiquido = salarioBruto * 0.925
  } else if (salarioBruto <= 2571.29) {
    salarioLiquido = salarioBruto * 0.9
  } else if (salarioBruto <= 3856.94) {
    salarioLiquido = salarioBruto * 0.88
  } else if (salarioBruto <= 7507.49) {
    salarioLiquido = salarioBruto * 0.86
  } else {
    salarioLiquido = salarioBruto * 0.86
  }

  mostrarSalario.innerHTML = `Seu salário com descontos é de: ${salarioLiquido}`
  event.preventDefault()
  console.log(`O seu salário líquido é:R$ ${salarioLiquido}`)


})

