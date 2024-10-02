import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/index.jsx";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext); // Access global context values

  // Check if the recipe is already in favorites
  const isFavorite = favoritesList?.some(
    (item) => item.id === recipeDetailsData?.recipe?.id
  );

  useEffect(() => {
    // Fetch recipe details from the API
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails(); // Call the function to fetch details
  }, [id]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Recipe Image */}
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            alt="Recipe"
          />
        </div>
      </div>

      {/* Recipe details */}
      <div className="flex flex-col gap-0.5">
        {/* Publisher info */}
        <span className="text-base text-red-500 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        {/* Recipe title */}
        <h3 className="font-bold text-3xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        {/* Button to add/remove from favorites */}
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className={`py-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md text-white ${
              isFavorite ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
        {/* Ingredients list */}
        <div className="flex flex-col my-1.5">
          <span className="text-2xl font-bold text-black mb-2">
            Ingredients:
          </span>
          <ul className="flex flex-col">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li key={ingredient.description}>
                {/* Quantity */}
                <span className="text-lg font-semibold text-black px-1">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                {/* Ingredient description */}
                <span className="text-lg font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
