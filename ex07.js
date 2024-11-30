let numero1 = 10
let numero2 = 5
let operador = '+' // Operador: pode ser '+', '-', '*', ou '/'

switch (operador) {
    case '+':
        console.log("Resultado: " + (numero1 + numero2))
        break
    case '-':
        console.log("Resultado: " + (numero1 - numero2))
        break
    case '*':
        console.log("Resultado: " + (numero1 * numero2))
        break
    case '/':
        if (numero2 !== 0) {
            console.log("Resultado: " + (numero1 / numero2))
        } else {
            console.log("Erro: Divisão por zero não é permitida.")
        }
        break
    default:
        console.log("Operador inválido. Por favor, use +, -, * ou /.")
}
