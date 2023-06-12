import { IUserInfo, UserName } from "./../types/Types";

const UserInfo = ({ email, name }: IUserInfo) => {
  const setUserFullName = ({ title, first, last }: UserName) => {
    return `${title} ${first} ${last}`;
  };

  return (
    <div>
      <p>{setUserFullName(name)}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;
