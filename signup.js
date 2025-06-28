import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const form = document.getElementById("cadastro-form");
const emailInput = document.getElementById("novo-email");
const senhaInput = document.getElementById("nova-senha");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const senha = senhaInput.value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    })
    .catch((err) => alert("Erro no cadastro: " + err.message));
});
