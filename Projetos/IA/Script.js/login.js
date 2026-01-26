// js/login.js

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  // SIMULAÇÃO (MVP)
  if (email === "agente@demo.com" && senha === "123") {
    window.location.href = "index.html";
  } else {
    erro.textContent = "Credenciais inválidas";
  }
}

