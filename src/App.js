import React, {useState, useEffect} from "react";
import RecipeList from "./components/RecipeList"
import Recipe from "./components/Recipe"
import NewRecipe from "./components/NewRecipe"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


const App = () => {
  // States / Variables
  const [recipes, setRecipes] = useState([]);
  // const [allTags, setAllTags] = useState([]);

  // Methods / Functions
  function getRecipes() {
    fetch("data/data.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }).then(response => {
      return response.json();
    }).then(data => {
      setRecipes(data);
    });
  }

  useEffect(() => {
    getRecipes();
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes(recipes.concat([newRecipe]));
  }

  const removeRecipe = (recipeIndex) => {
    setRecipes(recipes.filter(recipe => recipe !== recipes[recipeIndex]));
  }

  // HTML
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <h1>Retseptiraamat</h1>
          <Link id="align" to="/new">Lisa retsept</Link>
          <RecipeList recipes={recipes} removeRecipe={removeRecipe} />
        </Route>
        <Route path="/recipes/:id">
          <Recipe recipes={recipes} />
        </Route>
        <Route path="/new" exact>
          <NewRecipe addRecipe={addRecipe} />
        </Route>
      </Switch>
  </BrowserRouter>)
}

export default App;