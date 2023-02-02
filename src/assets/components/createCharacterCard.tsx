import React, { useState } from "react";
import App from '../../App';

type Character = {
    id: number;
    name: string;
    affiliation: string;
    image: string
}

// {id, name, image, affiliation}: Character

export const CharacterCard = (props: Character) => {
    const [isHidden, setIsHidden] = useState<string>("form__edit--hidden");


    
    const addEditForm = () => {
        
    }

    return (
        <div className= 'card mb-30' key = {props.id}>
            <div className='card__image'>
                <img src = { props.image } alt = { props.name } className = 'image'>
                </img>
            </div>
            <h2 className = 'mt-30 mb-10'>
                { props.name }
            </h2>
            <h3 className = 'mb-30'>
                { props.affiliation }
            </h3>
            <div className='button__container'>
                <div className='button' onClick = {() => {setIsHidden("")}}>
                    EDIT
                </div>
                <div className='button'>
                    DELETE
                </div>
            </div>

            <form className = {'card-form-container mt-30 ' + isHidden}>
                <input type = 'text' placeholder = 'New Title'/>
                <textarea placeholder = 'New description'/>
                <button>UPDATE</button>
            </form>
        </div>
    );
}