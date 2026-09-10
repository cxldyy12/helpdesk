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


cadastrarChamadoHardware("Sem memória RAM","Financeiro","Alta","Notebook Acer");
cadastrarChamadoHardware("Sem tinta","RH","Moderada","Impressora HP");
cadastrarChamadoSoftware("Explorador de Arquivos deletado","Administrativo","Alta","Computador Dell");
cadastrarChamadoSoftware("Barra de Tarefas Invisivel","Administrativo","Alta","Computador Positivo");

listarOsChamados();

fecharChamado(0);   

listarOsChamados();

reabreChamado(0)

listarOsChamados();

excluirChamado(1)

atualizarChamadosSoftware("Driver não instala","Administrativo","Alta","Computador Dell");
atualizarChamadosHardware("Não ta dando tela","Financeiro","Alta","Notebook Acer");

listarOsChamados();
