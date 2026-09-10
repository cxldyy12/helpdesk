import { Tecnico } from "../model/Tecnico.js";
import { salvar, deletar, listar, editar, buscar } from "../repository/tecnicoRepository.js";

export function adicionarTecnico(nome, cpf, telefone, especialidade, email){
    const tecnico = new Tecnico(nome, cpf, telefone, especialidade, email);

    salvar(tecnico);
}
export function editarTecnico(nome, cpf, telefone, especialidade, email){
    const tecnico = new Tecnico(nome, cpf, telefone, especialidade, email);

    editar(indice, tecnico);
}
export function deletarTecnico(indice){

    deletar(indice);
}
export function listarTecnico(){
    const tecnicos = listar()

        for(let i = 0; i < tecnicos.length; i++){
            const tecnico = tecnicos[i]

        console.log(`\n\n -> Tecnicos <- `)
        console.log("Nome: " + tecnico.nome);
        console.log("CPF: " + tecnico[i].gtcpf());
        console.log("Telefone: " + tecnico.telefone);
        console.log("Especialidade: " + tecnico[i].especialidade);
        console.log("Email: " + tecnico[i].email);
    }
}

export function buscarTecnico(indice){

    buscar(indice)
}