import {
    criarId
} from "./util.js"

import {
    listarNotas
} from "./view.js"


//-------------------------------------------------------------------------------------------------------------------
//Logic
//Array com informações da notas
let notasState = [
    /* Exemplo da estutura de dados
    {
        id:2,
        titulo:'teste2',
        descricao:'Nota vindo diratamente do java script.'

    }*/
];

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
    notasState.push(novaNota)
    listarNotas(notasState)
    formNotas.reset()

    let modal = document.getElementById('modal-nota');
    modal = bootstrap.Modal.getInstance(modal)
    modal.hide();
}

formNotas.addEventListener('submit',handleAdcionarNota)


 export function excluirNota(notaId){
    
    //Criando alert para confirmar
    let excluirConfirma = confirm('Deseja realmente excluir a nota?')

    if (excluirConfirma){
        notasState = notasState.filter((nota) => nota.id != notaId)

        listarNotas(notasState)
    }

}




