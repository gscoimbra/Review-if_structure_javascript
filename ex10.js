let peso = 70 // Peso
let altura = 1.75 // Altura

let imc = peso / (altura * altura)
console.log("Seu IMC é: " + imc.toFixed(2)) // exibe o IMC com 2 casas decimais

if (imc < 18.5) {
    console.log("Categoria: Abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Categoria: Peso normal")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Categoria: Sobrepeso")
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Categoria: Obesidade grau I")
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Categoria: Obesidade grau II")
} else if (imc >= 40) {
    console.log("Categoria: Obesidade grau III")
} else {
    console.log("Dados inválidos.");
}
