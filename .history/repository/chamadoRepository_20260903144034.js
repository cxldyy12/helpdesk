const chamados = [];

export function cadastrarChamado(Chamado) {
    chamados.push(Chamado);
}
export function listarChamados(){
    return chamados;
}

export function deletarChamado(indice){
    chamados.splice(indice,1);
}

export function atualizarChamado(indice, Chamado){
    chamados[indice] = Chamado;
}