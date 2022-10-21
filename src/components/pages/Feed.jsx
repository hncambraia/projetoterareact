import React from "react";
import { useNavigate } from "react-router-dom";
//import AppLoading from "../organisms/AppLoading";

import Default from "../templates/Default";
export default function Feed() {
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    navigate("/users/new");
  };

  return (
    <Default>
      <div className="user-blog">
        <h1>teste</h1>
        <button onClick={handleLoginClick} id="botao">
          Cadastrar
        </button>
      </div>
    </Default>
  );
}
