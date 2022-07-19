import PropTypes from 'prop-types';
import {
  Friend,
  Status,
  Avatar,
  FriendName,
} from 'components/FriendList/Item/Item.styled';

export const Item = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
