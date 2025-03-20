import clsx from 'clsx';
import s from './Profile.module.css';

const Profile = ({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.box}>
      <div>
        <img className={s.img} src={image} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={clsx(s.item, s.item_border)}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
