document.addEventListener("DOMContentLoaded", () => {

    const cardsAntes = document.getElementById("cardsAntes");
    const cardsDepois = document.getElementById("cardsDepois");

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const imagem = document.getElementById("imagemModal");
    const conteudo = document.getElementById("conteudoAba");

    const contador = document.getElementById("contador");
    const barraTempo = document.getElementById("barraTempo");
    const btnIniciar = document.getElementById("btnIniciar");

    let exercicioAtual = null;
    let intervalo = null;


    // =====================================================
    // CRIAR CARDS
    // =====================================================

    exercicios.forEach((exercicio) => {

        const card = document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <div class="card-imagem">

                <img
                    src="${exercicio.imagem}"
                    alt="${exercicio.nome}"
                    loading="lazy"
                >

            </div>


            <div class="card-body">

                <h3>
                    ${exercicio.nome}
                </h3>


                <div class="info">

                    <span>
                        ⏱ ${exercicio.tempo}
                    </span>

                    <span>
                        ⭐ ${exercicio.nivel}
                    </span>

                    <span>
                        📍 ${exercicio.regiao}
                    </span>

                    <span>
                        🎯 ${exercicio.objetivo}
                    </span>

                </div>


                <button
                    class="btn-ver-exercicio"
                    type="button">

                    Ver Exercício

                </button>

            </div>

        `;


        // =================================================
        // BOTÃO
        // =================================================

        const botao =
            card.querySelector(".btn-ver-exercicio");


        botao.addEventListener("click", () => {

            abrirModal(exercicio);

        });


        // =================================================
        // SEPARAR ANTES / DEPOIS
        // =================================================

        if (exercicio.categoria === "Antes") {

            cardsAntes.appendChild(card);

        } else {

            cardsDepois.appendChild(card);

        }

    });



    // =====================================================
    // ABRIR MODAL
    // =====================================================

    function abrirModal(exercicio) {

        exercicioAtual = exercicio;


        titulo.textContent =
            exercicio.nome;


        imagem.src =
            exercicio.gif;


        imagem.alt =
            `Demonstração de ${exercicio.nome}`;


        contador.textContent =
            "00";


        barraTempo.style.width =
            "0%";


        if (intervalo) {

            clearInterval(intervalo);

            intervalo = null;

        }


        mostrarComoFazer();


        modal.style.display =
            "flex";

    }



    // =====================================================
    // COMO FAZER
    // =====================================================

    function mostrarComoFazer() {

        conteudo.innerHTML = `

            <h3>
                📖 Como Fazer
            </h3>

            <ol>

                ${exercicioAtual.comoFazer
                    .map(item => `<li>${item}</li>`)
                    .join("")}

            </ol>

        `;


        ativarAba("abaComo");

    }



    // =====================================================
    // BENEFÍCIOS
    // =====================================================

    function mostrarBeneficios() {

        conteudo.innerHTML = `

            <h3>
                💪 Benefícios
            </h3>

            <ul>

                ${exercicioAtual.beneficios
                    .map(item => `<li>✅ ${item}</li>`)
                    .join("")}

            </ul>

        `;


        ativarAba("abaBeneficios");

    }



    // =====================================================
    // CUIDADOS
    // =====================================================

    function mostrarCuidados() {

        conteudo.innerHTML = `

            <h3>
                ⚠️ Cuidados
            </h3>

            <ul>

                ${exercicioAtual.cuidados
                    .map(item => `<li>⚠️ ${item}</li>`)
                    .join("")}

            </ul>

        `;


        ativarAba("abaCuidados");

    }



    // =====================================================
    // REGIÃO
    // =====================================================

    function mostrarRegiao() {

        conteudo.innerHTML = `

            <h3>
                🦵 Região Trabalhada
            </h3>

            <ul>

                ${exercicioAtual.regiaoTrabalhada
                    .map(item => `<li>📍 ${item}</li>`)
                    .join("")}

            </ul>

        `;


        ativarAba("abaRegiao");

    }



    // =====================================================
    // ATIVAR ABA
    // =====================================================

    function ativarAba(id) {

        document
            .querySelectorAll(".aba")
            .forEach((aba) => {

                aba.classList.remove("ativa");

            });


        document
            .getElementById(id)
            .classList.add("ativa");

    }



    // =====================================================
    // EVENTOS DAS ABAS
    // =====================================================

    document
        .getElementById("abaComo")
        .addEventListener("click", mostrarComoFazer);


    document
        .getElementById("abaBeneficios")
        .addEventListener("click", mostrarBeneficios);


    document
        .getElementById("abaCuidados")
        .addEventListener("click", mostrarCuidados);


    document
        .getElementById("abaRegiao")
        .addEventListener("click", mostrarRegiao);



    // =====================================================
    // FECHAR MODAL
    // =====================================================

    document
        .getElementById("fecharModal")
        .addEventListener("click", fecharModal);


    function fecharModal() {

        modal.style.display =
            "none";


        if (intervalo) {

            clearInterval(intervalo);

            intervalo = null;

        }

    }


    // Fechar clicando fora

    window.addEventListener("click", (evento) => {

        if (evento.target === modal) {

            fecharModal();

        }

    });



    // =====================================================
    // CRONÔMETRO
    // =====================================================

    btnIniciar.addEventListener("click", () => {

        if (!exercicioAtual) {
            return;
        }


        if (intervalo) {

            clearInterval(intervalo);

        }


        const tempo =
            parseInt(exercicioAtual.tempo);


        let restante =
            tempo;


        contador.textContent =
            String(restante).padStart(2, "0");


        barraTempo.style.width =
            "0%";


        intervalo =
            setInterval(() => {

                restante--;


                contador.textContent =
                    String(
                        Math.max(restante, 0)
                    ).padStart(2, "0");


                const progresso =
                    ((tempo - restante) / tempo) * 100;


                barraTempo.style.width =
                    Math.min(progresso, 100) + "%";


                if (restante <= 0) {

                    clearInterval(intervalo);

                    intervalo = null;


                    contador.textContent =
                        "✔";


                    barraTempo.style.width =
                        "100%";


                    alert(
                        "🎉 Alongamento concluído!"
                    );

                }

            }, 1000);

    });

});
