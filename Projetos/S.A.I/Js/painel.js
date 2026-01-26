function pesquisar() {
  const bi = document.getElementById("bi").value;

  if (bi !== "") {
    document.getElementById("dados").style.display = "block";
    document.getElementById("historico").style.display = "block";
  }
}

