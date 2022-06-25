import PropTypes from 'prop-types';

import {
  FriendCard,
  OnlineIndicator,
  Avatar,
  NameField,
} from './styledFriendListItem';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard className="item">
      <OnlineIndicator className="status" isonline={isOnline ? true : false} />
      <Avatar className="avatar" src={avatar} alt="User avatar" />
      <NameField className="name">{name}</NameField>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
