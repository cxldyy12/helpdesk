import{Chamado} from "./Chamado.js";

export class ChamadoSoftware extends Chamado{
    constructor(status, titulo, setor_solicitante, prioridade){
        super(status, titulo, setor_solicitante, prioridade)
        if (status == ""){
            throw new Error ('o chamado nao tem um status definido!')
        }
    }

    }
    atender(){
        console.log('O atendimento desse chamado sera feito remotamente');
    }
}