import {
    cadastrarChamadoHardware,
    cadastrarChamadoSoftware,
    listarOsChamados,
    atualizarChamadosSoftware,
    atualizarChamadosHardware,
    excluirChamado,
    fecharChamado,
    reabreChamado
} from "./controller/chamadoController.js";


cadastrarPedidoAgendado("Sem memória RAM","Financeiro","Alta","Notebook Acer");
cadastrarPedidoEntregue("Sem tinta","RH","Moderada","Impressora HP");
cadastrarChamadoSoftwar("Explorador de Arquivos deletado","Administrativo","Alta","Computador Dell");

listarOsChamados();

console.log("\nFazendo modificações\n")

fecharChamado(0);   

atualizarChamadosSoftware("Não ta dando tela","Financeiro","Alta","Notebook Acer",0);
atualizarChamadosHardware("Driver não instala","Administrativo","Alta","Computador Dell",2);

fecharChamado(0)
fecharChamado(1)
fecharChamado(2)
fecharChamado(3)

listarOsChamados();
