import { FC }from 'react'
import Person from './Components/Person'

const App: FC = () => {
  return (
    <div>
      <Person
        name={'test'}
        age={20}
        />
    </div>
  )
}

export default App
