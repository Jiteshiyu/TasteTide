import { useContext } from "react";
import RecipeItem from "../components/RecipeItem.jsx";
import { GlobalContext } from "../context/index.jsx";

export default function Favorites() {
  // Access the favorites list from context
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="pt-4 pb-12 container mx-auto flex flex-wrap justify-center gap-10">
      {/* Map through the favorites list and display each recipe item */}
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        // Display a message if there are no favorite recipes
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
