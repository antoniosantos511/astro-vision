const missoes = {

    // =========================
    // APOLLO 11
    // =========================

    apollo: {
        ano: "1969",
        titulo: "Apollo 11",
        imagem: "../fotos/apolo.png",

        descricao:
            "A Apollo 11 foi a primeira missão tripulada a levar seres humanos à superfície da Lua.",

        objetivo:
            "Realizar o primeiro pouso humano na Lua e retornar os astronautas com segurança para a Terra.",

        historia:
            "Lançada em 16 de julho de 1969, a Apollo 11 levou Neil Armstrong, Buzz Aldrin e Michael Collins. Em 20 de julho, o módulo lunar Eagle pousou na superfície da Lua. Neil Armstrong foi o primeiro ser humano a caminhar sobre a superfície lunar, seguido por Buzz Aldrin. Enquanto isso, Michael Collins permaneceu em órbita lunar. A missão retornou à Terra em 24 de julho de 1969."
    },


    // =========================
    // VOYAGER
    // =========================

    voyager: {
        ano: "1977",
        titulo: "Voyager",
        imagem: "../fotos/voyager.png",

        descricao:
            "As sondas Voyager foram lançadas para explorar os planetas gigantes do Sistema Solar.",

        objetivo:
            "Estudar Júpiter, Saturno, Urano e Netuno e continuar enviando informações sobre o espaço profundo.",

        historia:
            "A Voyager 1 e a Voyager 2 foram lançadas em 1977. As sondas visitaram diversos planetas e luas, enviando imagens e informações científicas para a Terra. A Voyager 2 é a única sonda que visitou Urano e Netuno."
    },


    // =========================
    // CURIOSITY
    // =========================

    curiosity: {
        ano: "2012",
        titulo: "Curiosity",
        imagem: "../fotos/CURIOSITY.png",

        descricao:
            "O rover Curiosity foi enviado para investigar a superfície de Marte.",

        objetivo:
            "Descobrir se Marte já teve condições ambientais capazes de sustentar vida microbiana.",

        historia:
            "O Curiosity pousou em Marte em agosto de 2012. Desde então, explora a região da cratera Gale, analisando rochas, solo e a atmosfera marciana para entender melhor o passado do planeta."
    },


    // =========================
    // JAMES WEBB
    // =========================

    webb: {
        ano: "2021",
        titulo: "James Webb",
        imagem: "../fotos/James Webb.png",

        descricao:
            "O Telescópio Espacial James Webb foi criado para observar o Universo em detalhes nunca vistos antes.",

        objetivo:
            "Estudar as primeiras galáxias, estrelas, exoplanetas e diferentes fenômenos do Universo.",

        historia:
            "O James Webb foi lançado em dezembro de 2021. O telescópio observa principalmente o Universo no infravermelho, permitindo estudar galáxias distantes, estrelas em formação e atmosferas de exoplanetas."
    },


    // =========================
    // PERSEVERANCE
    // =========================

    perseverance: {
        ano: "2021",
        titulo: "Perseverance",
        imagem: "../fotos/Perseverance.png",

        descricao:
            "O Perseverance é um rover desenvolvido para estudar a superfície de Marte.",

        objetivo:
            "Procurar sinais de vida microbiana antiga e coletar amostras de Marte.",

        historia:
            "O Perseverance pousou na cratera Jezero em fevereiro de 2021. A região foi escolhida porque os cientistas acreditam que já existiu um antigo delta de rio ali. O rover pesquisa rochas, analisa o ambiente e coleta amostras que poderão ajudar os cientistas a entender a história de Marte."
    },


    // =========================
    // CASSINI-HUYGENS
    // =========================

    cassini: {
        ano: "1997",
        titulo: "Cassini-Huygens",
        imagem: "../fotos/Cassini-Huygens.png",

        descricao:
            "A missão Cassini-Huygens foi uma das maiores missões de exploração de Saturno.",

        objetivo:
            "Estudar Saturno, seus anéis e suas luas.",

        historia:
            "A Cassini chegou ao sistema de Saturno em 2004 e passou mais de uma década estudando o planeta, seus anéis e suas luas. A sonda Huygens pousou em Titã em 2005, tornando-se a primeira nave a pousar na superfície de uma lua do Sistema Solar exterior."
    }

};



// ========================================
// ABRIR MISSÃO
// ========================================

function abrirMissao(nome) {

    const missao = missoes[nome];

    // Verifica se a missão existe
    if (!missao) {

        console.error("Missão não encontrada:", nome);

        return;
    }


    // Ano

    document.getElementById("modalYear").textContent =
        missao.ano;


    // Título

    document.getElementById("modalTitle").textContent =
        missao.titulo;


    // Imagem ou emoji

    const modalIcon = document.getElementById("modalIcon");


    if (missao.imagem) {

        modalIcon.innerHTML = `
            <img 
                src="${missao.imagem}" 
                alt="${missao.titulo}"
            >
        `;

    } else {

        modalIcon.textContent =
            missao.icone || "🚀";

    }


    // Descrição

    document.getElementById("modalDescription").textContent =
        missao.descricao;


    // Objetivo

    document.getElementById("modalObjective").textContent =
        missao.objetivo;


    // História

    document.getElementById("modalStory").textContent =
        missao.historia;


    // Abre o modal

    document.getElementById("missionModal")
        .classList.add("active");


    // Impede a página de rolar atrás do modal

    document.body.style.overflow = "hidden";
}



// ========================================
// FECHAR MISSÃO
// ========================================

function fecharMissao() {

    const modal =
        document.getElementById("missionModal");


    if (modal) {

        modal.classList.remove("active");

    }


    // Libera a rolagem da página

    document.body.style.overflow = "";
}



// ========================================
// CLICAR FORA DO CARD
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const modal =
        document.getElementById("missionModal");


    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                fecharMissao();

            }

        });

    }

});



// ========================================
// TECLA ESC PARA FECHAR
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fecharMissao();

    }

});