// 1) set a simple counter
// 2) fetch API: https://randomuser.me/api
// using axios
// using fetch
// useContext
// 3) append data
// ?page=2

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
}

export default App;
