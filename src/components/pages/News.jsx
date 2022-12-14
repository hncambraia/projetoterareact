import React from "react";
import NewsListWrapper from "../molecules/NewsListWrapper";

import Default from "../templates/Default";

export default function Feed() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    fetch("https://8b6j627v31.execute-api.us-east-1.amazonaws.com/news")
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
