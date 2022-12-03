import React from "react";

import NewsListItem from "./NewsListItem";

export default function NewsListWrapper(props) {
  return (
    <main className="container">
      <div className="row">
        <div className="col-9">
          <div className="user-blog__posts">
            {props.news.map((news) => (
              <NewsListItem
                key={news.id}
                id={news.id}
                title={news.titulo}
                link={news.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
