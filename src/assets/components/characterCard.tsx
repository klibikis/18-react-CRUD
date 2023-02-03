import React, { useState } from "react";
import App from '../../App';


type CharacterCardProps = {
    id: number;
    name: string;
    affiliation: string;
    image: string;
    onDeleteClick: (id: number) => void
    onEditSubmit: (id: number, name: string, affiliation: string) => void
}



export const CharacterCard = ({id, name, affiliation, image, onDeleteClick, onEditSubmit}: CharacterCardProps) => {


    const [isHidden, setIsHidden] = useState(true);
    const [editName, setEditName] = useState("");
    const [editAffiliation, setEditAffiliation] = useState("");

    return (
        <div className= 'card mb-30' key = { id }>
            <div className='card__image'>
                <img src = { image } alt = { name } className = 'image'>
                </img>
            </div>
            <h2 className = 'mt-30 mb-10'>
                { name }
            </h2>
            <h3 className = 'mb-30'>
                { affiliation }
            </h3>
            <div className='button__container'>
                <div className='button' onClick = {() => {
                    setIsHidden(!isHidden)
                    console.log(isHidden)
                    }}>
                    EDIT
                </div>
                <div className='button'
                    onClick = {(e) => {
                        e.preventDefault();
                        onDeleteClick(id)
                    }}>
                    DELETE
                </div>
            </div>

            <form 
                className = {'card-form-container mt-30 ' + (isHidden && 'form__edit--hidden')}
                onSubmit = {(e) => {
                    e.preventDefault()
                    onEditSubmit(id, editName, editAffiliation)
                    setEditName('')
                    setEditAffiliation('')
                    setIsHidden(!isHidden)
                }}
                >
                <input 
                type = 'text' 
                placeholder = 'New Name'
                value = { editName }
                onChange = {(e) => {
                    e.preventDefault();
                    setEditName(e.target.value)
                }}
                />
                <textarea 
                placeholder = 'New description'
                value = { editAffiliation }
                onChange = {(e) => {
                    e.preventDefault();
                    setEditAffiliation(e.target.value)
                }}
                />
                <button>UPDATE</button>
            </form>
        </div>
    );
}