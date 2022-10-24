import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";

function UserListItem(props) {
  return (
    <div>
      <div className="users__list-item-photo">
        <Avatar src={props.src} alt="" />
      </div>
      <div className="users__list-item-name">
        <h3>{props.name}</h3>
      </div>
      <div className="users__list-item-name">{props.bio}</div>
    </div>
  );
}

export default UserListItem;
