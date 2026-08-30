document.addEventListener("DOMContentLoaded", () => {

    const cardsAntes = document.getElementById("cardsAntes");
    const cardsDepois = document.getElementById("cardsDepois");

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const imagem = document.getElementById("imagemModal");
    const conteudo = document.getElementById("conteudoAba");

    let exercicioAtual = null;
    let intervalo = null;
    // =========================================
    // CRIAR TODOS OS CARDS
    // =========================================

    exercicios.forEach((exercicio) => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${exercicio.imagem}" alt="${exercicio.nome}">

            <div class="card-body">

                <h3>${exercicio.nome}</h3>

                <div class="info">

                    <span>⏱ ${exercicio.tempo}</span>
                    <span>⭐ ${exercicio.nivel}</span>
                    <span>📍 ${exercicio.regiao}</span>
                    <span>🎯 ${exercicio.objetivo}</span>

                </div>

                <button class="btn-ver-exercicio">
                    Ver Exercício
                </button>

            </div>
        `;

        card.querySelector(".btn-ver-exercicio").addEventListener("click", () => {

            abrirModal(exercicio);

        });

        if (exercicio.categoria === "Antes") {

            cardsAntes.appendChild(card);

        } else {

            cardsDepois.appendChild(card);

        }

    });

    // =========================================
    // ABRIR MODAL
    // =========================================

    function abrirModal(exercicio) {

        exercicioAtual = exercicio;

        titulo.textContent = exercicio.nome;

        imagem.src = exercicio.gif;
        document.getElementById("contador").textContent = "00";

        document.getElementById("barraTempo").style.width = "0%";
        mostrarComoFazer();

        modal.style.display = "flex";

    }

    // =========================================
    // COMO FAZER
    // =========================================

    function mostrarComoFazer() {

        conteudo.innerHTML = `
            <h3>📖 Como Fazer</h3>

            <ol>

                ${exercicioAtual.comoFazer
                    .map(item => `<li>${item}</li>`)
                    .join("")}

            </ol>
        `;

        ativarAba("abaComo");

    }

    // =========================================
    // BENEFÍCIOS
    // =========================================

    function mostrarBeneficios() {

        conteudo.innerHTML = `
            <h3>💪 Benefícios</h3>

            <ul>

                ${exercicioAtual.beneficios
                    .map(item => `<li>✅ ${item}</li>`)
                    .join("")}

            </ul>
        `;

        ativarAba("abaBeneficios");

    }

    // =========================================
    // CUIDADOS
    // =========================================

    function mostrarCuidados() {

        conteudo.innerHTML = `
            <h3>⚠ Cuidados</h3>

            <ul>

                ${exercicioAtual.cuidados
                    .map(item => `<li>⚠ ${item}</li>`)
                    .join("")}

            </ul>
        `;

        ativarAba("abaCuidados");

    }

    // =========================================
    // REGIÃO
    // =========================================

    function mostrarRegiao() {

        conteudo.innerHTML = `
            <h3>🦵 Região Trabalhada</h3>

            <ul>

                ${exercicioAtual.regiaoTrabalhada
                    .map(item => `<li>📍 ${item}</li>`)
                    .join("")}

            </ul>
        `;

        ativarAba("abaRegiao");

    }

    // =========================================
    // DESTACAR ABA
    // =========================================

    function ativarAba(id) {

        document.querySelectorAll(".aba").forEach((aba) => {

            aba.classList.remove("ativa");

        });

        document.getElementById(id).classList.add("ativa");

    }

    // =========================================
    // EVENTOS DAS ABAS
    // =========================================

    document.getElementById("abaComo").addEventListener("click", mostrarComoFazer);

    document.getElementById("abaBeneficios").addEventListener("click", mostrarBeneficios);

    document.getElementById("abaCuidados").addEventListener("click", mostrarCuidados);

    document.getElementById("abaRegiao").addEventListener("click", mostrarRegiao);

    // =========================================
    // FECHAR MODAL
    // =========================================

    document.getElementById("fecharModal").addEventListener("click", () => {

        modal.style.display = "none";

    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });
// =========================================
// CRONÔMETRO
// =========================================

document.getElementById("btnIniciar").addEventListener("click", () => {

    if(intervalo){

        clearInterval(intervalo);

    }

    let tempo = parseInt(exercicioAtual.tempo);

    let restante = tempo;

    const contador = document.getElementById("contador");

    const barra = document.getElementById("barraTempo");

    contador.textContent = restante;

    barra.style.width = "0%";

    intervalo = setInterval(()=>{

        restante--;

        contador.textContent = restante;

        const progresso = ((tempo-restante)/tempo)*100;

        barra.style.width = progresso+"%";

        if(restante<=0){

            clearInterval(intervalo);

            contador.textContent="✔";

            barra.style.width="100%";

            alert("🎉 Alongamento concluído!");

        }

    },1000);

});
});
