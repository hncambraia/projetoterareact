import React from "react";

function trataListas(list) {
  var lista = "";

  for (
    let indexIngredientes = 0;
    indexIngredientes < list.length;
    indexIngredientes++
  ) {
    let item = "<li>" + list[indexIngredientes] + "</li>";
    lista += item;
  }
  return lista;
}

export default function PostListItem(props) {
  const [showContent, setShowContent] = React.useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <main className="container">
      <div className="row g-5">
        <div>
          <div onClick={handleShowContent} className="user-blog__posts-item">
            <div className="user-blog__posts-item-photo">
              <rect width="100%" height="100%"></rect>
              <img src={props.image} height="400px" alt="" />
            </div>

            <div className="card-body">
              <h5 className="card-title"> {props.title} </h5>
              <p className="card-text"> </p>
              <p className="card-text"> </p>
            </div>

            {showContent && (
              <div className="user-blog__post-content">
                <p>
                  <b>Ingredientes</b>
                  <ul>{trataListas(props.ingrediente.split("\n"))}</ul>
                </p>
                <br></br>
                <p>
                  <b>Modo de Preparo</b>
                  <ol>{trataListas(props.modoPreparo.split("\n"))}</ol>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
