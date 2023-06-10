import { UserProps } from "./../types/User.ts";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

import classes from "./User.module.css";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.status}>
        <div>
          <p>Followers:</p>
          <p className={classes.amount}>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p className={classes.amount}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Go to best repos</Link>
    </div>
  );
};

export default User;
