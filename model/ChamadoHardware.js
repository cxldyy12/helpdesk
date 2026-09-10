import{Chamado} from "./Chamado.js";

export class ChamadoHardware extends Chamado{
constructor(titulo, setor_solicitante, prioridade, equipamento){
    super(titulo, setor_solicitante, prioridade);
    this.equipamento = equipamento;
    }
    atender(){
        console.log('O atendimento desse chamado ira ser feito presencialmente');
    }
}