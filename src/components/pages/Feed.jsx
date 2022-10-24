import React from "react";
import { useNavigate } from "react-router-dom";
import PostListWrapper from "../molecules/PostListWrapper";
//import AppLoading from "../organisms/AppLoading";

import Default from "../templates/Default";

export default function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [idUsuarioLogado, setUsuarioLogado] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:8090/feed/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  });

  return (
    <Default>
      <div className="user-blog">
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
