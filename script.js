import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const lembrar = document.getElementById("lembrar");
const verSenhaBtn = document.getElementById("toggle-senha");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const senha = senhaInput.value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((user) => {
      alert("Login bem-sucedido!");
      if (lembrar.checked) {
        localStorage.setItem("email", email);
      }
    })
    .catch((err) => alert("Erro no login: " + err.message));
});

document.getElementById("esqueci-senha").addEventListener("click", () => {
  const email = prompt("Digite seu e-mail para recuperação:");
  if (email)
    sendPasswordResetEmail(auth, email)
      .then(() => alert("E-mail de recuperação enviado!"))
      .catch((err) => alert("Erro: " + err.message));
});

verSenhaBtn.addEventListener("click", () => {
  const tipo = senhaInput.type === "password" ? "text" : "password";
  senhaInput.type = tipo;
});
