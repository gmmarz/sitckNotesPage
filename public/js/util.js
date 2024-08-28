//Module para funções gerais da lógica
//Module for general logic functions

export function criarId(notas){
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