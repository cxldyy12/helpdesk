export class Chamado {
    #status;

    constructor(titulo, setor_solicitante, prioridade){
        this.#status = "aberto";
        this.titulo = titulo;
        this.setor_solicitante = setor_solicitante;
        this.prioridade = prioridade;
    }
    get status(){
        
    }
    }
    fechar(){
        this.#status = "fechado"
    }
    reabrir(){
        this.#status = "aberto"
    }
    atender(){
        this.#status = "atendendo"
    }
