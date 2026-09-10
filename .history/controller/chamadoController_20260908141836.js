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

    if (chamados[indice]) {
        chamados[indice].fechar();
    }
}

export function reabreChamado(indice) {
    const chamados = listarChamados();

    if (chamados[indice]) {
        chamados[indice].reabrir();
    }
}