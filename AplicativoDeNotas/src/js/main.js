import NotasAPI from './NotasAPI.js'

NotasAPI.salvaNotas ({
  id:436868,// a criação de uma lista de notas ja usando a API
  titulo:"Essa nota foi modificada",
  corpo: "Eu sou uma nova nota",
});

console.log(NotasAPI.getTodasNotas());