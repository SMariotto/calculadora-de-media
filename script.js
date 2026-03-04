const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")

const button = document.getElementById("button")

function calcularMedia(){
    const valorNota1 = Number(nota1.value)
    const valorNota2 = Number(nota2.value)
    
    const total = (valorNota1+valorNota2)
    const media = (total/2)

    console.log("sua média é: ", media)
   
}

button.addEventListener("click", calcularMedia)