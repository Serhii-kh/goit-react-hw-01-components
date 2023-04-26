import css from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const { avatar, name, isOnline, id } = friends;
  return (
    <ul className={css.friend__list}>
      {friends.map((friend)=> {
        return <FriendListItem key={id}/>;
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
