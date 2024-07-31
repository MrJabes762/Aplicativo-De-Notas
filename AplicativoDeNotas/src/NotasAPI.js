export default class NotasAPI {
    static getTodasNotas() {//provalemntente um metodo de classe 
        const notas = JSON.parse(localStorage.getItem("aplicativodenotas") || "[]"); // Pegando as notas do localStorage
        return notas.sort((a, b) => { // Ordenando as notas pela data
            return new Date(a.salva) > new Date(b.salva) ? -1 : 1;
        });
    }

    static salvaNotas(notaPraSalvar) { // Salvando uma nova nota
        const notas = NotasAPI.getTodasNotas(); // Recebendo todas as notas existentes
        const alterar = notas.find(nota => nota.id == notaPraSalvar);//realizando a comparação pra saber uma alteração de data

        //editando a data 
        if (alterar){
            alterar.titulo = notaPraSalvar.titulo;
            alterar.corpo = notaPraSalvar.corpo;
            alterar.salva = new Date ().toISOString();

        }else{
            notaPraSalvar.id = Math.floor(Math.random() * 1000000); // Gerando um ID aleatório
            notaPraSalvar.salva = new Date().toISOString(); // Salvando a data atual
            notas.push(notaPraSalvar); // Adicionando a nova nota ao array de notas
            localStorage.setItem("aplicativodenotas", JSON.stringify(notas)); // Salvando o array de notas no localStorage
        }
    }

    static deletarNotas(id) {
        const notas = NotasAPI.getTodasNotas();
        const novaNota = notas.filter(nota => nota.id != id);// filtrando a nota que vai deletar a partir do ID
        localStorage.setItem("aplicativodenotas", JSON.stringify(novaNota)); // Salvando o array de notas no localStorage
    }
}
