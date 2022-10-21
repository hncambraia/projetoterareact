import React from "react";
import { useNavigate } from "react-router-dom";
//import AppLoading from "../organisms/AppLoading";
import logo from "../../images/logo.png";

export default function Home() {
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    navigate("/Feed/");
  };
  const handleCadastroClick = (event) => {
    navigate("/Users/");
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
        <input id="login" type="text" />
      </div>

      <div id="senhaCaixa">
        <label htmlFor="senha">Senha</label>
        <input id="senha" type="password" />
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
