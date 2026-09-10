import{Chamado} from "./Chamado.js";

export class ChamadoSoftware extends Chamado{
constructor(titulo, setor_solicitante, prioridade, sistema){
    super(titulo, setor_solicitante, prioridade);
    this.sistema = sistema;
}
    atender(){
        console.log('O atendimento desse chamado sera feito remotamente');
    }
}