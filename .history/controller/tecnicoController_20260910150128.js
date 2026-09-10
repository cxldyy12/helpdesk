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
    const tecnico = listar()

        for(let i = 0; i < tecnicos.length; i++){

        console.log(`\n\n -> Tecnicos <- `)
        console.log("Numero: " + i)
        console.log(": " + tecnicos[i].nome);
        console.log("Setor: " + tecnicos[i].cpf);
        console.log("Prioridade: " + chamados[i].telefone);
        console.log("Status: " + chamados[i].especialidade);
        console.log("Status: " + chamados[i].especialidade);
    }
}

