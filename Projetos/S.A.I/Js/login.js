// js/login.js

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  // SIMULAÇÃO (MVP)
  if (email === "agente@demo.com" && senha === "1234") {
    window.location.href = "painel.html";
  } else {
    erro.textContent = "Credenciais inválidas";
  }
}

