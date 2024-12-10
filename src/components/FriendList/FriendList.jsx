import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friendsList }) {
  return (
    <ul className={css.friendList}>
      {friendsList.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friendItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
