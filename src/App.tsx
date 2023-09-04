import { Header } from './components/Header/index.tsx'
import { Characters } from './components/Characters/index.tsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './App.ts'

function App() {

  const [characters, setCharacters] = useState<Characters[]>()

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get('https://hp-api.onrender.com/api/characters')
      setCharacters(response.data.slice(0, 12))
    }
    getCharacters();
  }, [])
  
  console.log(characters);

  return (
    <>
      <Header />
      <Container>
        {
          characters?.map(values => 
            <Characters 
              name={values.name}
              actor={values.actor} 
              dateOfBirth={values.dateOfBirth} 
              house={values.house} 
              image={values.image}
              species={values.species}
            /> 
          )
        }
      </Container>
    </>
  )
}

export default App
