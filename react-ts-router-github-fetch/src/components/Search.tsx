import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <h2>Search by User</h2>
      <p>Know the best repos</p>
      <div>
        <input type="text" placeholder="Type the username" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
