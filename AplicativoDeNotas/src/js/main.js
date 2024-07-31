import NotasView from './NotasView.js';

const app = document.getElementById('app'); // Pegando o contexto do App/ documento 
// Passando ele pra dentro do Objeto NotasView
const view = new NotasView(app, {
    notaAdicionada() {
        console.log("Essa nota foi adicionada");
    },
    notaEditada(novoTitulo, novoCorpo) {
        console.log(novoTitulo);
        console.log(novoCorpo);
    }
});
