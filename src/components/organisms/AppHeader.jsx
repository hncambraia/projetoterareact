import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/logo2.png";

export default function AppHeader(props) {
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    navigate("/Feed/");
  };

  const handleProfileClick = (event) => {
    navigate("/Users/");
  };

  const handleLogoutClick = (event) => {
    navigate("/");
  };
  const handlePostClick = (event) => {
    navigate("/feed/new/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img
          onClick={handleLoginClick}
          src={logo}
          alt=""
          width="150"
          height="auto"
          className="rounded mx-auto d-block center"
          onclick="gotoIndex()"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={handleProfileClick}>
              <a
                className="nav-link active"
                aria-current="page"
                id="urlProfile"
              >
                Profile
              </a>
            </li>
            <li className="nav-item" onClick={handleLoginClick}>
              <a className="nav-link active" aria-current="page" id="urlFeed">
                Feed
              </a>
            </li>
            <li className="nav-item dropdown" onClick={handleLogoutClick}>
              <a className="nav-link active" aria-current="page" id="urlLogout">
                Logout
              </a>
            </li>
          </ul>
          <input
            width="100px"
            className="form-control"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
            id="pesquisaFeed"
          />

          <button onclick="pesquisaFeed()" className="btn btn-outline-search">
            Pesquisar
          </button>

          <button onClick={handlePostClick} className="btn btn-outline-search">
            Novo Post
          </button>
        </div>
      </div>
    </nav>
  );
}
