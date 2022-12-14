import React from "react";
import UserListItem from "./UserListItem";

function UserListWrapper(props) {
  return (
    <center>
      <div className="users__list">
        {props.users
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((user) => (
            <UserListItem
              key={user.id}
              name={`${user.nome} (${user.login})`}
              src={user.avatar}
              id={user.id}
              bio={user.bio}
              email={user.email}
              imagem={user.imagem}
            />
          ))}
      </div>
    </center>
  );
}

export default UserListWrapper;
