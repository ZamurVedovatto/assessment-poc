import { FC }from 'react'
import Person, { HairColor } from './Components/Person'

const App: FC = () => {
  return (
    <div>
      <Person
        name={'test'}
        age={20}
        hairColor={HairColor.Pink}
        />
    </div>
  )
}

export default App
