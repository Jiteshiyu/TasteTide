import { useContext } from "react";
import { GlobalContext } from "../context/index.jsx";
import RecipeItem from "../components/RecipeItem.jsx";

export default function Home() {
  // Access recipe list and loading state from context
  const { recipeList, loading } = useContext(GlobalContext);

  // Show loading message while data is being fetched
  if (loading)
    return (
      <div className="text-2xl text-center text-black font-extrabold my-6">
        Loading...Please wait!
      </div>
    );

  return (
    <div className="pt-4 pb-12 container mx-auto flex flex-wrap justify-center gap-10">
      {/* Map through the recipe list and display each recipe item */}
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        // Display a message if the recipe list is empty
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Please search something!
          </p>
        </div>
      )}
    </div>
  );
}
