import css from 'components/FriendList/FriendList.module.css';
import { checkIsOnline } from 'js/checkIsOnline';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ background: checkIsOnline(isOnline) }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
