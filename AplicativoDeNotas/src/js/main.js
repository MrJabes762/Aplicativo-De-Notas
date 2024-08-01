import NotasView from './NotasView.js';
import NotasAPI from './NotasAPI.js';

const app = document.getElementById('app'); // Pegando o contexto do App/ documento 
// Passando ele pra dentro do Objeto NotasView
const view = new NotasView(app, {
    notaSelecionada (id){
        console.log ("Nota Selecionada", id)
    },
    notaAdicionada() {
        console.log("Essa nota foi adicionada");
    },
    notaEditada(novoTitulo, novoCorpo) {
        console.log(novoTitulo);
        console.log(novoCorpo);
    },
    notaDeletada (id){
        console.log ("Nota Deletada", id)
    }
});

view.subirNotasLista(NotasAPI.getTodasNotas());