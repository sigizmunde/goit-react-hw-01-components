import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { FriendListWrapper } from './styledFriendList';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper className="friend-list">
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
