import PropTypes from 'prop-types';
import s from '../Friends/Friends.module.css';

export default function FriendsListItem({ avatar, name, status }) {
  const isOnline = status;
  return (
    <li className={s.friendsItem}>
      <span className={isOnline ? s.greenStatus : s.redStatus}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
