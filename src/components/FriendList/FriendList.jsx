const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
          {isOnline ? <p>Online</p> : <p>Offline</p>}
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
