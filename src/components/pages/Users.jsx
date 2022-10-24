import React from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import UserListWrapper from "../molecules/UserListWrapper";

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const userLogado = localStorage.getItem("dataKey");
  React.useEffect(() => {
    fetch(`http://localhost:8090/usuarios/${userLogado}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <Default>
      <div className="users">
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}
