import React from "react";
import { Link } from "react-router-dom"

const RecipeList = ({ recipes, removeRecipe }) => {
    return (
        <div>
            {recipes.map((recipe, index) => {
                return(
                <article className="recipe" key={recipe.name}>
                    <div className="overview">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.duration + " min"}</p>
                        <ul className="tags">
                            {recipe.tags.map((tag) => {
                                return(
                                    <li key={tag}>{tag}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="actions">
                        <button id="x" onClick={
                            (event) => {
                                removeRecipe(index);
                            }
                        }>X</button>
                        <Link to={`/recipes/${index}`}>Vaata lähedamalt</Link>
                    </div>
                </article>)
            })}
        </div>
    )
}

export default RecipeList;