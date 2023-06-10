import { FC, useState, useEffect, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "./../types/Search.ts";
import classes from "./Search.module.css";

const Search: FC<SearchProps> = ({ loadUser }) => {
  const [userName, setUserName] = useState("ZamurVedovatto");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  useEffect(() => {
    loadUser(userName);
  }, []);

  return (
    <div className={classes.search}>
      <h2>Search by User</h2>
      <p>Know the best repos</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Type the username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          value={userName}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
