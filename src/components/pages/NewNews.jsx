import React from "react";

import Default from "../templates/Default";
import { useNavigate } from "react-router-dom";

export default function NewNewsForm() {
  const [titulo, setTitle] = React.useState("");
  const navigate = useNavigate();
  const [link, setlink] = React.useState("");
  const [news, setNews] = React.useState([]);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/news/", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ titulo, link }),
    }).then((data) => {
      setNews(data);
      setTitle("");
      setlink("");
      alert("Noticia criada com sucesso!");
      navigate(`/News/`);
    });
  };

  return (
    <Default>
      <div className="create-post">
        <h4>Nova Notícia</h4>

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
            <label htmlFor="link">Link</label>
            <textarea
              onChange={(event) => setlink(event.target.value)}
              name="link"
              id="link"
              value={link}
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
