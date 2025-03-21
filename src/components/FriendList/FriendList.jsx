import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
