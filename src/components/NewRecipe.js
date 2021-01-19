import React, { useState, useEffect } from "react"
import { withRouter, Link } from "react-router-dom"

const NewRecipe = (props) => {
    // Hooks
    const [name, setName] = useState("");
    const [tags, setTags] = useState("");
    const [duration, setDuration] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparation, setPreparation] = useState("");
    const [newRecipe, setNewRecipe] = useState({});

    // Functions
    const combineRecipe = (event) => {
        event.preventDefault(event);

        const ingredientsList = ingredients.split(",");
        const tagsList = tags.split(",");

        setNewRecipe({
            name: name,
            tags: tagsList,
            duration: duration,
            ingredients: ingredientsList,
            preparation: preparation,
        });
    }

    useEffect(() => {
        if (Object.keys(newRecipe).length !== 0) {
          props.addRecipe(newRecipe);
          props.history.push("/");
          setNewRecipe({});
        }
      }, [newRecipe, props]);

    // HTML
    return(
        <form onSubmit={event => combineRecipe(event)}>
            <label>Nimi:</label>
            <input type="text" required onInput={
                (event) => {
                    setName(event.target.value);
                }
            }></input>
            <label>Tags <em>(komaga eraldatud)</em> (optional)</label>
            <input type="text" onInput={
                (event) => {
                    setTags(event.target.value);
                }
            }></input>
            <label>Valmistusaeg <em>(min)</em>:</label>
            <input type="number" required onInput={
                (event) => {
                    setDuration(event.target.value);
                }
            }></input>
            <label>Koostisained <em>(komaga eraldatud)</em>:</label>
            <input 
            type="text" required onInput={
                (event) => {
                    setIngredients(event.target.value);
                }
            }></input>
            <label>Valmistamine</label>
            <textarea required onInput={
                (event) => {
                    setPreparation(event.target.value);
                }
            }></textarea>
            <div className="actions">
                <Link id="x" to="/">X</Link>
                <input type="submit" value="Salvesta"></input>
            </div>
        </form>
    )
}

export default withRouter(NewRecipe);