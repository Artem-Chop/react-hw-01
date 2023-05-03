import React from 'react';
import Profile from './Profile/profile';
// import Statistics from "./statistics";
import user from './user.json';

function App() {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
  );
}

export default App;
