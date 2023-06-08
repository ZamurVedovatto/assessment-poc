import { FC, ChangeEvent, useState } from 'react'

interface Props {
    name: string;
    age: number;
    email?: string;
    // setName: (name: string) => string;
}

const Person: FC<Props> = ({name, age, email}) => {
// const Person = ({name, age, email}: Props) => {
    const [country, setCountry] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputEvent>) => {
        setCountry(event.target.value)
    }

    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input
                placeholder="Write down your Country.."
                // onChange={(e: React.ChangeEvent<HTMLInputEvent>) => setCountry(e.target.value)}
                onChange={handleChange}
                />
            <span>{country}</span>
        </>
    )
}

export default Person