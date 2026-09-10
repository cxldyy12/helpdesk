import{Chamado} from "./Chamado.js";

export class ChamadoHardware extends Chamado{
    constructor(status, titulo, setor_solicitante, prioridade){
        super(status, titulo, setor_solicitante, prioridade)
        if (status == ""){
            throw new Error ('o chamado nao tem um status definido!')
        }
        console.log('Esse chamado ira ser reaberto');
    }
    atender(){
        console.log('O atendimento desse chamado ira ser feito presencialmente');
    }
}