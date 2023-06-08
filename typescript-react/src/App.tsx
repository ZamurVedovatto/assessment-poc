import { FC, createContext } from "react";
import Person, { HairColor } from "./Components/Person";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

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
