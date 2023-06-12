// 1) set a simple counter
// 2) fetch API: https://randomuser.me/api
// show values on screen
// using axios
// using fetch
// useContext
// 3) append data
// ?page=2

// import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./context/DataContext";
import Counter from "./components/Counter";
import UserInfo from "./components/UserInfo";

import { IUserInfo } from "./types/Types";

function App() {
  const [appState, dispatch] = useContext(AppContext);
  const [counter, setCounter] = useState<number>(0);
  const [data, setData] = useState<IUserInfo[] | null>([]);

  console.log("appState", appState);

  const fetchData = async () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then(({ results }: IUserInfo) => {
        setData(results);
        console.log(results);
      });
    // const res = await axios.get("https://randomuser.me/api");
    // setData(res.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Counter />
      <p>Fetch Data</p>
      {data.map((info: IUserInfo, index: number) => (
        <UserInfo key={index} {...info} />
      ))}
    </>
  );
}

export default App;
