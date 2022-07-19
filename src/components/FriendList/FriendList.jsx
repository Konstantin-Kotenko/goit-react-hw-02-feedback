import PropTypes from 'prop-types';
import { Item } from 'components/FriendList/Item/Item';
import { List } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List friends={friends}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
