import { Profile } from './Profile/Profile';
import user from 'components/user.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
};
