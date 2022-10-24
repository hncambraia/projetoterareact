import React from "react";
import UserListItem from "./UserListItem";

function UserListWrapper(props) {
  return (
    <div className="users__list">
      {props.users
        .sort((a, b) => a.nome.localeCompare(b.nome))
        .map((user) => (
          <UserListItem
            key={user._id}
            name={`${user.nome} (${user.login})`}
            src={user.avatar}
            id={user._id}
            bio={user.bio}
          />
        ))}
    </div>
  );
}

export default UserListWrapper;
