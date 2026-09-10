import{Chamado} from "./Chamado.js";

export class ChamadoSoftware extends Chamado{
constructor(titulo, setor_solicitante, prioridade, equipamento){
    super(titulo, setor_solicitante, prioridade);
    this.equipamento = equipamento;
}
    }
    atender(){
        console.log('O atendimento desse chamado sera feito remotamente');
    }
