import React, { useState } from "react";

type FormAddCharacterProps = {
    onSubmit: (name: string, affiliation: string, image: string) => void
}


export const FormAddCharacter = ({ onSubmit }: FormAddCharacterProps) => {

    const [characterName, setCharacterName] = useState("");
    const [characterAffiliation, setCharacterAffiliation] = useState("");
    const [characterImage, setCharacterImage] = useState("");


    return(
        <section>
            <div className="footer__container mb-30">
                <h1 className = "mb-30">Add New Character</h1>
                <form 
                    className = "card-form-container"
                    onSubmit= {(e) => {
                    e.preventDefault();
                    onSubmit(characterName, characterAffiliation, characterImage)
                    setCharacterName('');
                    setCharacterAffiliation('')
                    setCharacterImage('')
                }}>
                    <label className = "label">
                        Character name<br/>
                        <input type = "text" 
                        placeholder="Name" 
                        className= "form__input js-form-name"
                        value = { characterName }
                        onChange={(e) => {
                            e.preventDefault();
                            setCharacterName(e.target.value);
                        }}/>
                    </label>
                    <label>
                        Character affiliation<br/>
                        <textarea 
                        placeholder="Affiliation" 
                        className = "form__input js-form-affiliation"
                        value = { characterAffiliation }
                        onChange={(e) => {
                            e.preventDefault();
                            setCharacterAffiliation(e.target.value);
                        }}/>
                    </label>
                    <label className = "label mb-10">
                        Image URL<br/>
                        <input type = "text" 
                        placeholder="Image URL (ratio 1:1)" 
                        className = "form__input js-form-image"
                        value = { characterImage }
                        onChange={(e) => {
                            e.preventDefault();
                            setCharacterImage(e.target.value);
                        }}/>
                    </label>
                    <button className = "button button__add-new js-form-submit">
                    SUBMIT
                    </button>
                </form>
            </div>
        </section>

    );
}

