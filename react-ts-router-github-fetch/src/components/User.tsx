import { UserProps } from "./../types/User.ts";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div>
        <div>
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Go to best repos</Link>
    </div>
  );
};

export default User;
