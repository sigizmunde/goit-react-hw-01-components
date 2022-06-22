import { Profile } from './Profile';

const user = {
  username: 'Bob Odenkirk',
  tag: 'bobafett',
  location: 'Boryspil, Ukraine',
  avatar:
    'https://images.pexels.com/photos/9522822/pexels-photo-9522822.jpeg?auto=compress&cs=tinysrgb&w=250',
  stats: [
    { param: 'Followers', value: 198 },
    { param: 'Views', value: 3685 },
    { param: 'Likes', value: 492 },
  ],
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
