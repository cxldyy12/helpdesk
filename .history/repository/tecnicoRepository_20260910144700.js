const tecnicos = [];


export function salvar (tecnico){
    tecnicos.push(tecnico)
}

export function editar (indice, tecnico){
    tecnicos[indice] = tecnico;
}

export function deletar(indice){
    tecnicos.splice[indice, 1]
}

export function listar(indice){
    return tecnicos
}

export function buscar(indice){
    return tecnicos[indice, 1]
}