import css from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.status}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
