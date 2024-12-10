import {
  friendCard,
  friendName,
  friendStatus,
  statusOnline,
  statusOffline,
} from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={friendCard}>
      <img src={avatar} alt={name} width="48" />
      <p className={friendName}>{name}</p>
      <p className={friendStatus}>{isOnline}</p>
      {isOnline === "true" ? (
        <p className={statusOnline}>Online</p>
      ) : (
        <p className={statusOffline}> Offline</p>
      )}
    </div>
  );
}

export default FriendListItem;
