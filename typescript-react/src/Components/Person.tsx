import { FC } from 'react'

interface Props {
    name: string;
    age: number;
    email?: string;
    // setName: (name: string) => string;
}

const Person: FC<Props> = ({name, age, email}) => {
// const Person = ({name, age, email}: Props) => {

    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
        </>
    )
}

export default Person