import React from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteIMG from "../../images/lixeira.png";

export default function NewsListItem(props) {
  const navigate = useNavigate();

  const handlenClick = (url) => {
    navigate(url);
  };

  const handleDelete = (id) => {
    fetch(`https://8b6j627v31.execute-api.us-east-1.amazonaws.com/news/${id}`, {
      method: "DELETE",
    }).then(() => alert("Excluido com sucesso"));
  };

  return (
    <main className="container">
      <div className="row g-5">
        <div>
          <div className="user-blog__posts-item">
            <div className="card-body" align="center">
              <div className="user-blog__posts-item-photo" align="center">
                <img
                  onClick={() => handleDelete(props.id)}
                  src={deleteIMG}
                  height="50px"
                  alt=""
                />
              </div>
              <h1 className="card-title">Título: {props.title} </h1>
              <h5 className="card-title">Link: {props.link}</h5>
              <p className="card-text"> </p>
              <p className="card-text"> </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
