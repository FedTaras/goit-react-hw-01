import {
  friendCard,
  friendName,
  statusOnline,
  statusOffline,
} from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={friendCard}>
      <img src={avatar} alt={name} width="48" />
      <p className={friendName}>{name}</p>
      {isOnline === "true" ? (
        <p className={statusOnline}>Online</p>
      ) : (
        <p className={statusOffline}> Offline</p>
      )}
    </div>
  );
}

export default FriendListItem;
