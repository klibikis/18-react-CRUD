import axios from 'axios';
import React, { useState, useEffect, useId } from 'react';
import './App.css';
import './assets/libs/reset.css';
import { CharacterCard } from './assets/components/characterCard';
import { FormAddCharacter } from './assets/components/formAddNew';
import { Header } from "./assets/components/header"

type Character = {
  id: number;
  name: string;
  affiliation: string;
  image: string
}

function App() {

  const defaultImage = "https://picsum.photos/400/400";
  const [loading, setLoading] = useState(true)
  const [cardList, setCardList] = useState<Character[]>([])
  const [uniqueID, setUniqueID] = useState<number>(5)

  const createCards = () =>{
    setLoading(true)
    axios.get<Character[]>("http://localhost:3004/simpsons").then(res => {
      setCardList(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    createCards()
    setLoading(false)
    console.log("create")
  }, []);

    const addCharacterHandler = (name: string, affiliation: string, image: string) => {
      const newCharacter: Character = {
          id: uniqueID,
          name,
          affiliation,
          image
      }
      setLoading(true)
      axios.post<Character>("http://localhost:3004/simpsons", newCharacter).then(() => {
        setUniqueID(uniqueID+1)
        setCardList([...cardList, newCharacter])
        setLoading(false)
      })
      
    }

    const deleteCharacterHandler = (id: number) => {
      setLoading(true)
      axios.delete("http://localhost:3004/simpsons/" + id);
      createCards()
    }
    const editCharacterHandler = (id: number, name: string, affiliation: string) => {
      setLoading(true)
      axios.patch<Character>("http://localhost:3004/simpsons/" + id, {
        name: name,
        affiliation: affiliation
      });
      createCards();
      setLoading(false)
    }

  if(loading) return <h1>Loading...</h1>

  return (
    <div>
      <Header/>
      <section>
        <div className="cards__container">
          {cardList.map(({id, name, affiliation, image}: Character) => {
            return <CharacterCard
              id = {id}
              name = {name}
              affiliation = {affiliation}
              image = {image}
              key = {id}
              onDeleteClick = {(id: number) => {
                deleteCharacterHandler(id)
              }}
              onEditSubmit = {(id: number, name: string, affiliation: string) => {
                editCharacterHandler(id, name, affiliation)
              }}
            />
          })} 
        </div>
      </section>
      <FormAddCharacter
        onSubmit = {(name: string, affiliation: string, image: string) => {
          if(image.length === 0){
            image = defaultImage;
          }
          addCharacterHandler(name, affiliation, image)
        }}
      />
    </div>
  )
}


export default App
