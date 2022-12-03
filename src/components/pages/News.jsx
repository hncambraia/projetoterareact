import React from "react";
import NewsListWrapper from "../molecules/NewsListWrapper";

import Default from "../templates/Default";

export default function Feed() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/news/")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        console.log("teste");
      });
    return () => {};
  }, []);

  return (
    <Default>
      <div className="user-blog">
        <NewsListWrapper news={news} />
      </div>
    </Default>
  );
}
