import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';

export default function Profile({
  stats: { followers, likes, views },
  username,
  avatar,
  location,
  tag,
}) {
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img width="300" src={avatar} alt={username} className={s.avatar} />
          <p className={s.username}>{username}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.item}>
            <span className="label">followers:</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={s.item}>
            <span className="label">Views:</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={s.item}>
            <span className={s.likes}>Likes:</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.propTypes = {
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
