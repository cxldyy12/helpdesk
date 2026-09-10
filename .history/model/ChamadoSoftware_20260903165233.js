import{Chamado} from "./Chamado.js";

export class ChamadoSoftware extends Chamado{
    constructor(status, titulo, setor_solicitante, prioridade){
        super(status, titulo, setor_solicitante, prioridade)

    }
    atender(){
        console.log('O atendimento desse chamado sera feito remotamente');
    }
}