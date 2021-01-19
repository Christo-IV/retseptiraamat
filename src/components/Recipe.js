import React from "react";
import { Link, useParams } from "react-router-dom"

const Recipe = ({ recipes }) => { 
    const id = useParams().id;
    return(
        <div>
            <h2>{recipes[id].name}</h2>
            <ul className="tags">
                {recipes[id].tags.map((tag) => {
                    return(
                        <li key={tag}>{tag}</li>
                    )
                })}
            </ul>
            <p>{recipes[id].duration} min</p>
            <ul>
                {recipes[id].ingredients.map((ingredient) => {
                    return <li key={ingredient}>{ingredient}</li>;
                })}
            </ul>
            <p>{recipes[id].preparation}</p>
            <Link to="/">Tagasi</Link>
        </div>
    )
}

export default Recipe;