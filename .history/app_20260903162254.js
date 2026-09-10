import {
    cadastrarChamadoHardware,
    cadastrarChamadoSoftware,
    listarOsChamados,
    atualizarChamadoSoftware,
    atualizarChamadoHardware,
    excluirChamado,
    fecharChamado,
    reabreChamado
} from "./controller/chamadoController.js";


cadastrarChamadoHardware("Sem memória RAM","Financeiro","Alta","Notebook Acer");
cadastrarChamadoHardware("Sem tinta","RH","Moderada","Impressora HP");
cadastrarChamadoSoftware("Explorador de Arquivos deletado","Administrativo","Alta","Computador Dell");
cadastrarChamadoSoftware("Barra de Tarefas Invisivel","Administrativo","Alta","Computador Positivo");

listarOsChamados();

console.log(" > Fechando chamado número 1.");
fecharChamado(0);   
listarOsChamados();

console.log(" > Reabrindo chamado número 1.");
reabreChamado(0)
console.log(" > Chamado 1 reaberto");
listarOsChamados();

console.log(" > Excluindo chamado 2")
excluirChamado(1)
console.log(" > Chamado 2 excluido")

console.log("Atualizando chamado 3 e 1");
listarOsChamados();
