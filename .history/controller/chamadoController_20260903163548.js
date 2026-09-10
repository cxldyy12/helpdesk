import { ChamadoSoftware } from "../model/ChamadoSoftware.js";
import { ChamadoHardware } from "../model/ChamadoHardware.js";
import { cadastrarChamado, listarChamados, deletarChamado, atualizarChamado } from "../repository/chamadoRepository.js";

export function cadastrarChamadoHardware(titulo, setor_solicitante, prioridade, equipamento) {
    const chamado = new ChamadoHardware(titulo, setor_solicitante, prioridade, equipamento);

    cadastrarChamado(chamado);
}
export function cadastrarChamadoSoftware(titulo, setor_solicitante, prioridade, sistema) {
    const chamado = new ChamadoSoftware(titulo, setor_solicitante, prioridade, sistema);

    cadastrarChamado(chamado);
}
export function listarOsChamados(){

    const chamados = listarChamados();

    for(let i = 0; i < chamados.length; i++){

        console.log(` -> Chamados <- `)
        console.log("Numero: " + i)
        console.log("Titulo: " + chamados[i].titulo);
        console.log("Setor: " + chamados[i].setor_solicitante);
        console.log("Prioridade: " + chamados[i].prioridade);
        console.log("Status: " + chamados[i].status);
        console.log(chamados[i].atender());
    }
}

export function atualizarChamadosSoftware(titulo, setor_solicitante, prioridade, sistema, indice){

    const chamado = new ChamadoSoftware(titulo, setor_solicitante, prioridade, sistema);

    atualizarChamado(indice, chamado);
}
export function atualizarChamadosHardware(titulo, setor_solicitante, prioridade, equipamento, indice){

    const chamado = new ChamadoHardware(titulo, setor_solicitante, prioridade, equipamento);

    atualizarChamado(indice, chamado);
}
export function excluirChamado(indice){
    deletarChamado(indice);
}
export function fecharChamado(indice) {
    const chamados = listarChamados();

}


export function reabreChamado(indice) {
    const chamados = listarChamados();
        
}