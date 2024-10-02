import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for global state
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  // State variables for managing search, loading, recipes, favorites, and details
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      // Parse the response data
      const data = await res.json();
      if (data?.data?.recipes) {
        // Update recipe list
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  // Add to favorites function
  function handleAddToFavorite(getCurrentItem) {
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      // If not found, add it to favorites
      cpyFavoritesList.push(getCurrentItem);
    } else {
      // If found, remove it from favorites
      cpyFavoritesList.splice(index, 1);
    }

    // Update favorites list state
    setFavoritesList(cpyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
