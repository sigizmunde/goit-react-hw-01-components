import PropTypes from 'prop-types';
import { PersonDescription } from './PersonDescription';
import { PersonStatistics } from './PersonStatistics';

export const Profile = user => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div class="profile">
      {PersonDescription({ username, tag, location, avatar })}
      {PersonStatistics(stats)}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
