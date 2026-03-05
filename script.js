const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")

const button = document.getElementById("button")
const resultado = document.getElementById("resultado")

function calcularMedia(){
    const valorNota1 = Number(nota1.value)
    const valorNota2 = Number(nota2.value)
    
    const total = (valorNota1+valorNota2)
    const media = (total/2)

    resultado.innerText = `sua média é: ${media.toFixed(2)}`

}

button.addEventListener("click", calcularMedia)