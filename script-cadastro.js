function mostrarCampos() {
  const tipo = document.getElementById("tipo").value;

  const grupos = {
    cpf: document.getElementById("cpf-campos"),
    cnpj: document.getElementById("cnpj-campos"),
    produto: document.getElementById("produto-campos"),
    servico: document.getElementById("servico-campos")
  };

  // Oculta todos
  Object.values(grupos).forEach((grupo) => grupo.classList.add("oculto"));

  // Exibe o selecionado
  if (grupos[tipo]) {
    grupos[tipo].classList.remove("oculto");
  }
}
