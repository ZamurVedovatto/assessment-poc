import { FC, createContext } from "react";
import Person from "./Components/Person";
import { AppContextInterface } from "./Interfaces.ts";
import { HairColor } from "./Enums.ts";

export const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Pedro",
    age: 30,
    country: "Brazil",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <Person name={"test"} age={20} hairColor={HairColor.Pink} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
