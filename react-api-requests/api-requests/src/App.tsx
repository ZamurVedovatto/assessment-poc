import { useState, useEffect } from 'react'

type Repository = {
  full_name: string,
  description: string
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/ZamurVedovatto/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
        console.log(data)
      })
  }, [])

  return (
    <ul>
      {repositories.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
