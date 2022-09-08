import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem.jsx';
import s from './Friends.module.css';

export default function FriendsList({ friends }) {
  // console.log(friends);
  return (
    <ul className={s.FriendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          status={isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
