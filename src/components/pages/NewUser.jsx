import React from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import { useNavigate } from "react-router-dom";

export default function UserPostForm() {
  const [login, setLogin] = React.useState("");
  const navigate = useNavigate();
  const [senha, setingredintes] = React.useState("");
  const [nome, setnome] = React.useState("");
  const [bio, setbio] = React.useState("");
  const [email, setemail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://8b6j627v31.execute-api.us-east-1.amazonaws.com/users", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ login, senha, nome, email, bio }),
    }).then((data) => {
      setPosts(data);
      setLogin("");
      setingredintes("");
      setnome("");
      alert("usuario criado com sucesso!");
      navigate(`/`);
    });
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="form-control">
        <h4>Novo Usuário</h4>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Login</label>

            <input
              onChange={(event) => setLogin(event.target.value)}
              type="text"
              id="login"
              name="login"
              value={login}
            />
          </div>

          <div className="create-post__form-content">
            <label htmlFor="senha">Senha</label>
            <input
              onChange={(event) => setingredintes(event.target.value)}
              type="password"
              name="senha"
              id="senha"
              value={senha}
            ></input>
          </div>

          <div className="create-post__form-content">
            <label htmlFor="nome">Nome:</label>
            <input
              onChange={(event) => setnome(event.target.value)}
              name="nome"
              id="nome"
              value={nome}
            ></input>
          </div>
          <div className="create-post__form-content">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(event) => setemail(event.target.value)}
              name="email"
              id="email"
              value={email}
            ></input>
          </div>
          <div className="create-post__form-content">
            <label htmlFor="bio">Bio:</label>
            <textarea
              onChange={(event) => setbio(event.target.value)}
              name="bio"
              id="bio"
              value={bio}
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
