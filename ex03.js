const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))

const media = (nota1 + nota2 + nota3) / 3

let conceito;

if (media >= 9) {
    conceito = "A"
} else if (media >= 8) {
    conceito = "B"
} else if (media >= 7) {
    conceito = "C"
} else if (media >= 6) {
    conceito = "D"
} else if (media >= 5) {
    conceito = "E"
} else {
    conceito = "F"
}

console.log(`Média: ${media.toFixed(2)} - Conceito: ${conceito}`)

