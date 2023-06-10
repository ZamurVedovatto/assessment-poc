import { FC, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "./../types/Search.ts";
import classes from "./Search.module.css";

const Search: FC<SearchProps> = ({ loadUser }) => {
  const [userName, setUserName] = useState("");
  return (
    <div className={classes.search}>
      <h2>Search by User</h2>
      <p>Know the best repos</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Type the username"
          onKeyDown={(e) => setUserName(e.target.value)}
        />
        <button>
          <BsSearch onClick={() => loadUser(userName)} />
        </button>
      </div>
    </div>
  );
};

export default Search;
