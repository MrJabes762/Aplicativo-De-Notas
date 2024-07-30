export default class NotesAPI{
    static getTodasNotas (){
        const notas = JSON.parse(localStorage.getItem("notasapp-notas") || "[]");
        return notas.sort((a,b) => {
            return new Date (a.salva) > new Date (b.salva) ? -1:1;
        });
    }
    static saveNotas (notaPraSalvar){

    }
    static deletarNotas (id){
        
    }
}