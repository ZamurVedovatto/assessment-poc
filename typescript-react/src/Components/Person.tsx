import { FC, ChangeEvent, useState, useContext } from "react";
import { AppContext } from "./../App";

export enum HairColor {
  Blonde = "Your hair is blonde, good for you",
  Brown = "Color hair color",
  Pink = "Wow that is so cool",
}

interface Props {
  name: string;
  age: number;
  email?: string;
  hairColor: HairColor;
  // setName: (name: string) => string;
}

const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const appState = useContext(AppContext);
  console.log(appState);
  // const Person = ({name, age, email}: Props) => {
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
