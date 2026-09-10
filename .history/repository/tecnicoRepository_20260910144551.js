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
export function uou(indice){
    tecnicos.splice[indice, 1]
}