const exercicios = [

    // =====================================================
    // ANTES DO TREINO
    // =====================================================

    {
        id: 1,
        nome: "Pescoço",
        categoria: "Antes",
        tempo: "20 segundos",
        nivel: "Fácil",
        regiao: "Pescoço",
        objetivo: "Preparação muscular",
        imagem: "img/cards/pescoco.png",
        gif:"img/gifs/pescoco.gif",

        comoFazer: [
            "Mantenha a coluna reta.",
            "Incline lentamente a cabeça para um dos lados.",
            "Segure por 20 segundos.",
            "Repita para o outro lado."
        ],

        beneficios: [
            "Reduz a tensão cervical.",
            "Melhora a mobilidade.",
            "Prepara para exercícios de membros superiores."
        ],

        cuidados: [
            "Não faça movimentos bruscos.",
            "Não force além do limite."
        ],

        regiaoTrabalhada: [
            "Pescoço",
            "Trapézio"
        ]
    },

    {
        id: 2,
        nome: "Ombros",
        categoria: "Antes",
        tempo: "20 segundos",
        nivel: "Fácil",
        regiao: "Ombros",
        objetivo: "Mobilidade",
        imagem: "img/cards/ombros.png",
        gif:"img/gifs/ombros.gif",

        comoFazer: [
            "Cruze um braço à frente do peito.",
            "Empurre suavemente com o outro braço.",
            "Mantenha por 20 segundos.",
            "Troque o braço."
        ],

        beneficios: [
            "Aumenta a mobilidade.",
            "Prepara para exercícios superiores.",
            "Diminui a rigidez."
        ],

        cuidados: [
            "Não elevar os ombros.",
            "Movimento suave."
        ],

        regiaoTrabalhada: [
            "Deltoides",
            "Trapézio"
        ]
    },

    {
        id: 3,
        nome: "Braços",
        categoria: "Antes",
        tempo: "20 segundos",
        nivel: "Fácil",
        regiao: "Braços",
        objetivo: "Aquecimento",
        imagem: "img/cards/bracos.png",
        gif:"img/gifs/bracos.gif",

        comoFazer: [
            "Eleve um braço acima da cabeça.",
            "Flexione o cotovelo.",
            "Empurre suavemente.",
            "Troque o braço."
        ],

        beneficios: [
            "Prepara bíceps e tríceps.",
            "Melhora a flexibilidade."
        ],

        cuidados: [
            "Não forçar o cotovelo."
        ],

        regiaoTrabalhada: [
            "Bíceps",
            "Tríceps"
        ]
    },

    {
        id: 4,
        nome: "Tronco",
        categoria: "Antes",
        tempo: "20 segundos",
        nivel: "Fácil",
        regiao: "Coluna",
        objetivo: "Mobilidade",
        imagem: "img/cards/tronco.png",
        gif:"img/gifs/tronco.gif",

        comoFazer: [
            "Mantenha os pés afastados.",
            "Gire lentamente o tronco.",
            "Repita para ambos os lados."
        ],

        beneficios: [
            "Melhora a mobilidade da coluna.",
            "Ativa o core."
        ],

        cuidados: [
            "Não fazer movimentos rápidos."
        ],

        regiaoTrabalhada: [
            "Coluna",
            "Abdômen"
        ]
    },

    {
        id: 5,
        nome: "Quadril",
        categoria: "Antes",
        tempo: "20 segundos",
        nivel: "Fácil",
        regiao: "Quadril",
        objetivo: "Mobilidade",
        imagem: "img/cards/quadril.png",
        gif:"img/gifs/quadril.gif",

        comoFazer: [
            "Faça movimentos circulares com o quadril.",
            "Repita lentamente por 20 segundos."
        ],

        beneficios: [
            "Prepara para exercícios inferiores.",
            "Melhora a mobilidade."
        ],

        cuidados: [
            "Movimentos controlados."
        ],

        regiaoTrabalhada: [
            "Quadril",
            "Lombar"
        ]
    },

    {
        id: 6,
        nome: "Panturrilha Dinâmica",
        categoria: "Antes",
        tempo: "20 segundos",
        nivel: "Fácil",
        regiao: "Panturrilha",
        objetivo: "Ativação",
        imagem: "img/cards/panturrilha-dinamica.png",
        gif:"img/gifs/panturrilha-dinamica.gif",

        comoFazer: [
            "Eleve os calcanhares.",
            "Retorne lentamente.",
            "Repita continuamente."
        ],

        beneficios: [
            "Ativa a circulação.",
            "Prepara a musculatura."
        ],

        cuidados: [
            "Realize o movimento lentamente."
        ],

        regiaoTrabalhada: [
            "Panturrilha"
        ]
    },

    // =====================================================
    // APÓS O TREINO
    // =====================================================

    {
        id: 7,
        nome: "Panturrilha",
        categoria: "Depois",
        tempo: "30 segundos",
        nivel: "Fácil",
        regiao: "Panturrilha",
        objetivo: "Recuperação",
        imagem:"img/cards/panturrilha.png",
        gif:"img/gifs/panturrilha.gif",

        comoFazer: [
            "Fique de frente para uma parede.",
            "Apoie as mãos.",
            "Leve uma perna para trás.",
            "Mantenha o calcanhar apoiado.",
            "Permaneça por 30 segundos."
        ],

        beneficios: [
            "Melhora a flexibilidade.",
            "Ajuda na recuperação muscular.",
            "Diminui a rigidez."
        ],

        cuidados: [
            "Não force além do limite.",
            "Respire normalmente."
        ],

        regiaoTrabalhada: [
            "Panturrilha",
            "Tendão de Aquiles"
        ]
    },

    {
        id: 8,
        nome: "Quadríceps",
        categoria: "Depois",
        tempo: "30 segundos",
        nivel: "Fácil",
        regiao: "Quadríceps",
        objetivo: "Flexibilidade",
        imagem: "img/cards/quadriceps.png",
        gif:"img/gifs/quadriceps.gif",

        comoFazer: [
            "Segure o pé atrás do corpo.",
            "Mantenha os joelhos alinhados.",
            "Puxe suavemente.",
            "Segure por 30 segundos."
        ],

        beneficios: [
            "Melhora a mobilidade.",
            "Reduz tensão muscular.",
            "Evita encurtamentos."
        ],

        cuidados: [
            "Não incline o tronco.",
            "Movimentos suaves."
        ],

        regiaoTrabalhada: [
            "Quadríceps"
        ]
    },

    {
        id: 9,
        nome: "Posterior da Coxa",
        categoria: "Depois",
        tempo: "30 segundos",
        nivel: "Fácil",
        regiao: "Posterior",
        objetivo: "Alongamento",
        imagem: "img/cards/posterior-coxa.png",
        gif:"img/gifs/posterior.gif",

        comoFazer: [
            "Estenda uma perna.",
            "Incline lentamente o tronco.",
            "Mantenha as costas retas."
        ],

        beneficios: [
            "Melhora a flexibilidade.",
            "Reduz dores musculares."
        ],

        cuidados: [
            "Não dobre a coluna."
        ],

        regiaoTrabalhada: [
            "Posterior da Coxa"
        ]
    },

    {
        id: 10,
        nome: "Glúteos",
        categoria: "Depois",
        tempo: "30 segundos",
        nivel: "Fácil",
        regiao: "Glúteos",
        objetivo: "Mobilidade",
        imagem: "img/cards/gluteos.png",
        gif:"img/gifs/gluteos.gif",

        comoFazer: [
            "Cruze uma perna sobre a outra.",
            "Puxe em direção ao peito.",
            "Segure por 30 segundos."
        ],

        beneficios: [
            "Alivia a tensão muscular.",
            "Melhora a mobilidade do quadril."
        ],

        cuidados: [
            "Não faça movimentos rápidos."
        ],

        regiaoTrabalhada: [
            "Glúteos"
        ]
    }

];
