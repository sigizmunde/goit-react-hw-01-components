import PropTypes from 'prop-types';

export const PersonDescription = ({ username, tag, avatar, location }) => {
  return (
    <div class="description">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">{'@' + tag}</p>
      <p class="location">{location}</p>
    </div>
  );
};

PersonDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
