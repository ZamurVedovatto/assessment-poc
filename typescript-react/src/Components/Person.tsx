import { FC, ChangeEvent, useState, useContext } from "react";
import { AppContext } from "./../App";
import { HairColor } from "./../Enums";

interface Props {
  name: string;
  age: number;
  email?: string;
  hairColor: HairColor;
  // setName: (name: string) => string;
}

// const Person = ({name, age, email}: Props) => {
const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const appState = useContext(AppContext);
  console.log(appState);
  const [country, setCountry] = useState<string | null>(null);

  type NameType = "Pedro" | "Jack";
  const nameForType: NameType = "Jack";

  const handleChange = (event: ChangeEvent<HTMLInputEvent>) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <h1>{hairColor}</h1>
      <input
        placeholder="Write down your Country.."
        // onChange={(e: React.ChangeEvent<HTMLInputEvent>) => setCountry(e.target.value)}
        onChange={handleChange}
      />
      <p>{country}</p>
      <p>{nameForType}</p>
    </>
  );
};

export default Person;
