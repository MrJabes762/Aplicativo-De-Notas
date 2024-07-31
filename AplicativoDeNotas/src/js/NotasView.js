export default class NotasView {
    constructor(root, { notaSelecionada, notaAdicionada, notaEditada, notaDeletada } = {}) {
        this.root = root;
        this.notaSelecionada = notaSelecionada;
        this.notaAdicionada = notaAdicionada;
        this.notaEditada = notaEditada;
        this.notaDeletada = notaDeletada;

        this.root.innerHTML = `
            <div class="barra__de__Divisao">
                <button class="botao_Adicionar" type="button">Adicionar Nota</button>
                <div class="notas_lista"></div>
            </div>
            <div class="notas_visualizacao">
                <input class="notas_titulo" type="text" placeholder="Nova nota">
                <textarea class="notas_corpo">sdsfdghfN...</textarea>
            </div>
        `;

        const btnAddNota = this.root.querySelector(".botao_Adicionar");
        const pegaTitulo = this.root.querySelector(".notas_titulo");
        const pegaDescricao = this.root.querySelector(".notas_corpo");

        if (btnAddNota) {
            btnAddNota.addEventListener("click", () => {
                if (this.notaAdicionada) {
                    this.notaAdicionada();
                } else {
                    console.error("A função notaAdicionada não foi passada como parâmetro.");
                }
            });
        } else {
            console.error("O botão Adicionar Nota não foi encontrado.");
        }

        [pegaTitulo, pegaDescricao].forEach(pegaCampo => {
            pegaCampo.addEventListener("blur", () => {
                const tituloAdicionado = pegaTitulo.value.trim();
                const descricaoAdicionada = pegaDescricao.value.trim();
                if (this.notaEditada) {
                    this.notaEditada(tituloAdicionado, descricaoAdicionada);
                } else {
                    console.error("A função notaEditada não foi passada como parâmetro.");
                }
            });
        });
    }

    _criarListaDeItemsHTML(id, titulo, corpo, data) {
        const TAMANHO_DO_CORPO = 60;
        return `
            <div class="notas_lista-item" data-nota-id="${id}">
                <div class="notas_pequenas-titulo">${titulo}</div>
                <div class="notas_pequenas-corpo">
                    ${corpo.substring(0, TAMANHO_DO_CORPO)}
                    ${corpo.length > TAMANHO_DO_CORPO ? "..." : ""}
                </div>
                <div class="notas_pequenas-salvas">
                    ${data.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    subirNotasLista(notas) {
        const containerListaContainer = this.root.querySelector(".notas_lista");
        containerListaContainer.innerHTML = "";
        for (const nota of notas) {
            const html = this._criarListaDeItemsHTML(nota.id, nota.titulo, nota.corpo || "", new Date(nota.data));
            containerListaContainer.insertAdjacentHTML("beforeend", html);
        }

        containerListaContainer.querySelectorAll(".notas_lista-item").forEach(listaDeItensDeNotas => {
            listaDeItensDeNotas.addEventListener("click", () => {
                this.notaSelecionada(listaDeItensDeNotas.dataset.notaId);
            });
        });
    }
}
