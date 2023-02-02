import React from "react";

export const AddNewCharacter = () => {
    return(
        <section>
            <div className="footer__container mb-30">
                <h1 className = "mb-30">Add New Character</h1>
                <form className = "card-form-container">
                    <label className = "label">
                        Character name<br/>
                        <input type = "text" placeholder="Name" className= "form__input js-form-name"/>
                    </label>
                    <label>
                        Character affiliation<br/>
                        <textarea placeholder="Affiliation" className = "form__input js-form-affiliation"></textarea>
                    </label>
                    <label className = "label mb-10">
                        Image URL<br/>
                        <input type = "text" placeholder="Image URL (ratio 1:1)" className = "form__input js-form-image"/>
                    </label>
                    <button className = "button button__add-new js-form-submit">
                    SUBMIT
                    </button>
                </form>
            </div>
        </section>

    );
}

