import React from "react";
import { useNavigate } from "react-router-dom";
//import AppLoading from "../organisms/AppLoading";
import logo from "../../images/logo.png";

export default function Home() {
  const navigate = useNavigate();
  const [usuarioDigitado, setUsuario] = React.useState("");
  const [senhaDigitado, setSenha] = React.useState("");
  const [idUsuarioLogado, setUsuarioLogado] = React.useState("");

  const handleLoginClick = (event) => {
    event.preventDefault();
    fetch(
      "https://8b6j627v31.execute-api.us-east-1.amazonaws.com/validausuario",
      {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ login: usuarioDigitado, senha: senhaDigitado }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const status = data.status;
        const mensagem = data.message;
        const idUsuarioLogado = data.id;
        console.log(data);
        if (status) {
          setUsuarioLogado(idUsuarioLogado);
          navigate(`/Feed/`);

          localStorage.setItem("dataKey", idUsuarioLogado);
        } else {
          alert(mensagem);
        }
      });
  };
  const handleCadastroClick = (event) => {
    navigate("/NewUser/");
  };

  return (
    <div id="divLogin">
      <img
        id="logoLogin"
        src={logo}
        alt="logo escrito locoffe e simbolo"
        width="200px"
      />

      <div id="loginCaixa">
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          onChange={(event) => setUsuario(event.target.value)}
          name="login"
          value={usuarioDigitado}
        />
      </div>

      <div id="senhaCaixa">
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          onChange={(event) => setSenha(event.target.value)}
          name="senha"
          value={senhaDigitado}
        />
      </div>

      <button onClick={handleLoginClick} id="botao">
        Login
      </button>
      <button onClick={handleCadastroClick} id="botaoCadastro">
        Cadastro
      </button>
    </div>
  );
}
