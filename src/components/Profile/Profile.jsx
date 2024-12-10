import {
  profileCard,
  profileInfo,
  profileAvatar,
  profileName,
  profileTag,
  profileLocation,
  profileStats,
  profileStat,
  statLabel,
  statValue,
} from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={profileCard}>
      <div className={profileInfo}>
        <img src={image} alt="User avatar" className={profileAvatar} />
        <p className={profileName}>{name}</p>
        <p className={profileTag}>@{tag}</p>
        <p className={profileLocation}>{location}</p>
      </div>
      <ul className={profileStats}>
        <li className={profileStat}>
          <span className={statLabel}>Followers</span>
          <span className={statValue}>{stats.followers}</span>
        </li>
        <li className={profileStat}>
          <span className={statLabel}>Views</span>
          <span className={statValue}>{stats.views}</span>
        </li>
        <li className={profileStat}>
          <span className={statLabel}>Likes</span>
          <span className={statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
