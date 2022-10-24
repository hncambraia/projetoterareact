import React from "react";

import PostListItem from "./PostListItem";

export default function PostListWrapper(props) {
  return (
    <main className="container">
      <div className="row">
        <div className="col-9" align="center">
          <div className="user-blog__posts">
            {props.posts.map((post) => (
              <PostListItem
                key={post._id}
                image={post.imagem}
                title={post.titulo}
                ingrediente={post.ingredientes}
                modoPreparo={post.modopreparo}
              />
            ))}
          </div>
        </div>
        <div className="col-3">
          <ul>
            <h5 class="card-title"> Em Alta </h5>

            <li>
              {" "}
              <a
                target="_blank"
                href="https://pt.wikipedia.org/wiki/Coffea_arabica"
              >
                {" "}
                Arábica{" "}
              </a>{" "}
            </li>
            <li>
              <a
                target="_blank"
                href="https://reviewcafe.com.br/dicas-e-receitas/cafe-conilon/"
              >
                {" "}
                Conilon{" "}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.noticiasagricolas.com.br/cotacoes/cafe/cafe-arabica-mercado-fisico-tipo-6-duro"
              >
                Bebida Dura (Cotação)
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.lojinhauai.com/blog/bebida-mole/"
              >
                {" "}
                Bebida Mole e Dura{" "}
              </a>
            </li>
          </ul>
          <ul>
            <h5 class="card-title">Link Uteis</h5>

            <li>
              <a target="_blank" href="https://hubdocafe.com.br">
                {" "}
                HUB do Café{" "}
              </a>{" "}
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.google.com/search?q=safras+cafe&sxsrf=ALiCzsajbYpdkrpUtokLsNjD_H_b1-S9gw%3A1659567889065&ei=Ef_qYpnBA-vx1sQPwfaZgAU&ved=0ahUKEwjZjYiU5Kv5AhXruJUCHUF7BlAQ4dUDCA4&uact=5&oq=safras+cafe&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOhIILhDHARDRAxDIAxCwAxBDGAI6EgguEMcBEK8BEMgDELADEEMYAjoPCC4Q1AIQyAMQsAMQQxgCOgUIABCABDoECAAQQzoLCC4QgAQQxwEQrwE6CAgAEB4QFhAKOgQIABANOgYIABAeEA06CAgAEB4QDRAFOgUIIRCgAToICCEQHhAWEB06CAgAEB4QCBANSgQIQRgASgQIRhgBUHBY6SVg7ChoBnABeACAAa4BiAHZCpIBBDAuMTCYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz"
              >
                Safras de Café{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
