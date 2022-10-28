function UserListItem(props) {
  return (
    <div>
      <main className="container">
        <div className="row g-5">
          <div className="users__list-item-name">
            <img src={props.imagem} height="200px" alt="" />
            <h3>{props.name}</h3>
          </div>

          <div className="users__list-item-name">Email: {props.email}</div>
          <div className="users__list-item-name">Bio: {props.bio}</div>
        </div>
      </main>
    </div>
  );
}

export default UserListItem;
