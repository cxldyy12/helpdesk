import{Chamado} from "./Chamado.js";

export class ChamadoHardware extends Chamado{
    constructor(titulo, setor_solicitante, prioridade){
        super(titulo, setor_solicitante, prioridade)
    }
    atender(){
        console.log('O atendimento desse chamado ira ser feito presencialmente');
    }
}