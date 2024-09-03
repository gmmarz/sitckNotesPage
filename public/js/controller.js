/*import {
    criarId
} from "./util.js"
*/
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

    const hrNota = document.createElement('hr')


    //criando div header
    const divNotaHeader = document.createElement('div')
    divNotaHeader.classList.add('nota-header')
    divNotaHeader.appendChild(notaHeaderH3)
    divNotaHeader.appendChild(botaoExcluirNota)
    
    //Criando Nota body
    //Criando descrição da nota
    pNotaBody = document.createElement('p')
    pNotaBody.textContent = nota.descricao

    divNotaBody = document.createElement('div')
    divNotaBody.classList.add('nota-body')
    divNotaBody.appendChild(pNotaBody)

    //Criando Elemento completo
    liNota.appendChild(divNotaHeader)
    liNota.appendChild(hrNota)
    liNota.appendChild(divNotaBody)

    return liNota

}

//-------------------------------------------------------------------------------------------------------------------
//Logic
//Array com informações da notas
let notasState = [
    {
        id:2,
        titulo:'teste2',
        descricao:'Nota vindo diratamente do java script.'

    }
];

function criarId(notas){
    let maiorId;

    for(let nota of notas){
        if(maiorId == undefined || nota.id > maiorId){
            maiorId = nota.id
        }

    }

    if(maiorId == undefined){
        return 1
    }

    return maiorId++
}

//listar notas
function listarNotas(notas){
    const ulNotas = document.getElementById('notas')

    for(let nota of notas){
        const liNota = Nota(nota)
        ulNotas.appendChild(liNota)
    }

}

function handleListarNotas(){
    listarNotas(notasState)
}

window.addEventListener('DOMContentLoaded',handleListarNotas)

//Adicionar notas
const formNotas = document.getElementById('form-nota')


