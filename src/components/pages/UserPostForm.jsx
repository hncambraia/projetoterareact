import React from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import { useNavigate } from "react-router-dom";

export default function UserPostForm() {
  const [titulo, setTitle] = React.useState("");
  const navigate = useNavigate();
  const [ingredientes, setingredintes] = React.useState("");
  const [modopreparo, setmodopreparo] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8090/feed/create", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ titulo, ingredientes, modopreparo, modopreparo }),
    }).then((data) => {
      setPosts(data);
      setTitle("");
      setingredintes("");
      setmodopreparo("");
      alert("Post criado com sucesso!");
      navigate(`/Feed/`);
    });
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="create-post">
        <h4>Novo Post</h4>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
            />
          </div>

          <div className="create-post__form-content">
            <label htmlFor="ingredientes">Ingredientes</label>
            <textarea
              onChange={(event) => setingredintes(event.target.value)}
              name="ingredientes"
              id="ingredientes"
              value={ingredientes}
            ></textarea>
          </div>

          <div className="create-post__form-content">
            <label htmlFor="modopreparo">Mode de Preparo</label>
            <textarea
              onChange={(event) => setmodopreparo(event.target.value)}
              name="modopreparo"
              id="modopreparo"
              value={modopreparo}
            ></textarea>
          </div>

          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
