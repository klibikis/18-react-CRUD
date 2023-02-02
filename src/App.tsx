import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/libs/reset.css';
import { CharacterCard } from './assets/components/createCharacterCard';
import { addNewCharacter } from './assets/components/addNewCharacter';

type Character = {
  id: number;
  name: string;
  affiliation: string;
  image: string
}







function App() {

  // const [characterName, setCharacterName] = useState('Character Name')
  // const [cardID, setCardID] = useState(0)
  // const [imageSrc, setImageSrc] = useState('./src/assets/images/homer.jpg')
  // const [characterAffiliation, setCharacterAffiliation] = useState('Charaster Affiliation')
  const [cardList, setCardList] = useState<Character[]>([])


  useEffect(() => {
    createCards()
    console.log("create")
  }, []);





  const createCards = () =>{
      axios.get("http://localhost:3004/simpsons").then(res => {
            setCardList(res.data)
      })
    }


  return (
    <div>
      <section className = "nav">
        <div className="container">
            <h1>CRUD - The Simpsons Edition</h1>
        </div>
      </section>

      <section>
        <div className="cards__container">
          {cardList.map((character: Character) => {
            return <CharacterCard
              id = {character.id}
              name = {character.name}
              affiliation = {character.affiliation}
              image = {character.image}
              key = {character.id}
            />

          // return CharacterCard(character)
          })}
          
        </div>
      </section>

      {/* { addNewCharacter() } */}
    </div>
  )
}


export default App
