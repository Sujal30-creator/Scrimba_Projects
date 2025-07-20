import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromGemini } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromGemini(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(event) {
        // 1. Prevent the default page reload
        event.preventDefault();

        // 2. Get the form data from the event
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");

        // 3. Update the state with the new ingredient
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);

        // 4. (Optional) Reset the form input field
        event.target.reset();
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}