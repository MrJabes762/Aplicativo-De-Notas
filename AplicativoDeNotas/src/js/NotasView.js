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
            btnAddNota.addEventListener("click", () => { // Pegando o clic do botão e retornando a adiçao no main
                if (this.notaAdicionada) {
                    this.notaAdicionada();
                } else {
                    console.error("A função notaAdicionada não foi passada como parâmetro.");
                }
            });
        } else {
            console.error("O botão Adicionar Nota não foi encontrado.");
        }

        [pegaTitulo, pegaDescricao].forEach(pegaCampo => { //Pefa o titulo e a descricao para editar
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
    _criarListaDeItemsHTML(id,titulo, corpo, data){// essa função recebe as informações para exibir a lista na tela
        const TAMANHO_DO_CORPO = 60;
        return `
            <div class = "notas_lista-item" data-nota-id = "${id}">
                <div class = "notas_pequenas-titulo">${titulo}</div>
                <div class = "notas_pequenas-corpo ">
                    ${corpo.substring(0, TAMANHO_DO_CORPO)}
                    ${corpo.lenght > TAMANHO_DO_CORPO ?"..." : ""}
                </div>
                <div class = "notas_pequenas-salvas">
                    ${data.toLocaleString(undefined, {dataStyle: "full",timeStyle:"short"})}
                </div>
            </div>
        `;
    }
}
