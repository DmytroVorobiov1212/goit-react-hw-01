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
      <div className={s.description}>
        <img className={s.img} src={image} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={clsx(s.item, s.item_border)}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
