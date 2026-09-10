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
        console.log("\n\n -> Tecnico(a) "+);
        console.log("Nome: " + tecnicos[i].nome);
        console.log("CPF: " + tecnicos[i].cpf);
        console.log("Telefone: " + tecnicos[i].telefone);
        console.log("Especialidade: " + tecnicos[i].especialidade);
        console.log("Email: " + tecnicos[i].email);
    }
}

export function buscarTecnico(indice){
    const tecnico = buscar(indice)
    console.log(`Tecnico: ${tecnico.nome}`)
}