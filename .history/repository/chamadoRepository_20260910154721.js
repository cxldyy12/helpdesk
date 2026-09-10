const chamados = [];

export function cadastrarChamado(Chamado) {
    chamados.push(Chamado);
}
export function listarChamados(){
    return chamados;
}

export function deletarChamado(indice){
    chamados.splice(indice);
}

export function atualizarChamado(indice, Chamado){
    chamados[indice] = Chamado;
}
export function buscarChamado(indice){
    return chamdos[indice];
}