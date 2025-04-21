// Exercício 1: Calculadora de Operações Matemáticas
// Crie uma calculadora em TypeScript que seja capaz de realizar operações matemáticas básicas,
// como adição, subtração, multiplicação e divisão.
// A calculadora deve ser implementada como uma função que aceita três parâmetros: dois
// números e uma string representando a operação a ser realizada ("soma", "subtração",
// "multiplicação" ou "divisão").
// A função deve retornar o resultado da operação.


function Calculadora(a : number, b : number, operador : string){
  operador = operador.toLowerCase();
  const operadoresValidos = ['soma', 'subtracao', 'multiplicacao', 'multiplicação', 'divisao']
  if (!operadoresValidos.includes(operador)) {
    return "Operação inválida, verifique e tente novamente!"
  } else{
    switch (operador) {
      case 'soma':
        return a + b;
      case 'subtracao':
        return a - b;
      case 'multiplicacao':
        return a * b;
      case 'divisao':
        if (b === 0) return "Erro: divisão por zero!";
        return a / b;        
    }
  }
  
};

const resultadoSoma = Calculadora(5, 3, 'soma');
const resultadoMultiplicacao = Calculadora(4, 2, 'multiplicacao');
const resultadoDivisao = Calculadora(10, 2, 'divisao');
const resultadoSubtracao = Calculadora(4, 2, 'subtracao');

console.log(`Resultado Soma é: ${resultadoSoma}\n Resultado Multiplicação é: ${resultadoMultiplicacao}\n Resultado da Divisão é: ${resultadoDivisao}\n Resultado da Subtração é: ${resultadoSubtracao}`)
