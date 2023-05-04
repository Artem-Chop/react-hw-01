import React from 'react';

import Profile from './Profile/profile';
import user from './Profile/user.json';

import Statistics from './Statistics/statistics';
import data from './Statistics/data.json';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
