import React from "react";
import user from "./user.json";

const Profile = () => {
  return (
    <div>
      <div>
        <img src={user.avatar} alt="User avatar" />
        <p>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{user.stats.followers}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
