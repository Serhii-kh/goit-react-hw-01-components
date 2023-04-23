import css from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
