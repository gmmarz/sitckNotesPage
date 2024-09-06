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

    maiorId = maiorId+1
    
    return maiorId
}

//listar notas
function listarNotas(notas){
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

function handleListarNotas(){
    listarNotas(notasState)
}

window.addEventListener('DOMContentLoaded',handleListarNotas)

//Adicionar notas
const formNotas = document.getElementById('form-nota')

function handleAdcionarNota(event){
    event.preventDefault();
    

    //Capturando resultado do formulário
    let novaNota = {
        id: criarId(notasState),
        titulo: formNotas.notaTitulo.value,
        descricao: formNotas.nota.value
    };
    console.log('nova nota')
    console.log(novaNota)

    notasState.push(novaNota)
    listarNotas(notasState)
    formNotas.reset()

    let modal = document.getElementById('modal-nota');
    modal = bootstrap.Modal.getInstance(modal)
    modal.hide();
}

formNotas.addEventListener('submit',handleAdcionarNota)


function excluirNota(notaId){
    
    //Criando alert para confirmar
    let excluirConfirma = confirm('Deseja realmente excluir a nota?')

    if (excluirConfirma){
        notasState = notasState.filter((nota) => nota.id != notaId)

        listarNotas(notasState)
    }

}




