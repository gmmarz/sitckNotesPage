
import{
    excluirNota
} from "./controller.js"

//Compenentes html
function Nota(nota){
    //construindo li
    const liNota = document.createElement('li')
    liNota.classList.add('nota')

    //Criando Nota header the dentro da div para fora

    const notaHeaderH3 = document.createElement('h3')
    notaHeaderH3.textContent = nota.titulo

    const botaoExcluirNota = document.createElement('button')
    botaoExcluirNota.classList.add('btn', 'btn-danger')
    
    const iconeExcluir = document.createElement('ion-icon')
    iconeExcluir.name = 'trash'
    botaoExcluirNota.appendChild(iconeExcluir)

    //Criando evento para excluir nota
    botaoExcluirNota.addEventListener(
        "click", () => excluirNota(nota.id)
    )

    const hrNota = document.createElement('hr')

    //criando div header
    const divNotaHeader = document.createElement('div')
    divNotaHeader.classList.add('nota-header')
    divNotaHeader.appendChild(notaHeaderH3)
    divNotaHeader.appendChild(botaoExcluirNota)
    
    //Criando Nota body
    //Criando descrição da nota
    const pNotaBody = document.createElement('p')
    pNotaBody.textContent = nota.descricao

    const divNotaBody = document.createElement('div')
    divNotaBody.classList.add('nota-body')
    divNotaBody.appendChild(pNotaBody)

    //Criando Elemento completo
    liNota.appendChild(divNotaHeader)
    liNota.appendChild(hrNota)
    liNota.appendChild(divNotaBody)

    return liNota

}

//listar notas
export function listarNotas(notas){
    const ulNotas = document.getElementById('notas')
    
    //Limpando lista de notas para mostrar notasStates 
    ulNotas.textContent = ''

    if(notas.lenght ==0){
        ulNotas.textContent = 'Nenhuma nota foi encontrada'
    }

    for(let nota of notas){
        const liNota = Nota(nota)
        ulNotas.appendChild(liNota)
    }
   
}