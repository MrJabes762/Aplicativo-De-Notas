import '/src/css/style.css'

document.querySelector('#app').innerHTML = `
  <div class = "notas">
      <div class = "barra__de__Divisao">
        <button class = "botao_Adicionar" type- "button">Adicionar Nota</button>
          <div class = "notas_lista">
              <div class = "lista-notas-item">
                <div class = "notas_pequenas-titulo">Titulo</div>
                <div class = "notas_pequenas-corpo">Descricao</div>
                <div class = "notas_pequenas-salvas">Data</div> 
              </div>
          </div>
      </div>
        <div class ="notas_visualizacao">
        </div>
  </div>
`