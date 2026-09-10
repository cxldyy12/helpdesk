import {
    cadastrarChamadoHardware,
    cadastrarChamadoSoftware,
    listarOsChamados,
    atualizarChamadosSoftware,
    atualizarChamadosHardware,
    excluirChamado,
    fecharChamado,
    reabreChamado,
    assumirChamado
} from "./controller/chamadoController.js";

import {
    adicionarTecnico,
    editarTecnico,
    deletarTecnico,
    listarTecnico,
    buscarTecnico
} from "./controller/tecnicoController.js";


adicionarTecnico(
    "joao",
    "12345678900",
    "47999999999",
    "hardware",
    "joao@gmail.com"
);

adicionarTecnico(
    "maria",
    "98765432100",
    "47988888888",
    "software",
    "maria@gmail.com"
);


cadastrarChamadoHardware(
    "computador nao liga",
    "financeiro",
    "alta",
    "notebook"
);

cadastrarChamadoSoftware(
    "sistema travando",
    "administrativo",
    "moderada",
    "windows"
);


listarTecnico();

listarOsChamados();

fecharChamado(0);

reabreChamado(0);

assumirChamado(0, 0);

listarOsChamados();

excluirChamado(1);

listarOsChamados();