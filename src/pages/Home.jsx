import { useContext } from "react";
import { GlobalContext } from "../context/index.jsx";
import RecipeItem from "../components/RecipeItem.jsx";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="text-2xl text-center text-black font-extrabold my-6">
        Loading...Please wait!
      </div>
    );

  return (
    <div className="pt-4 pb-12 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Please search something!
          </p>
        </div>
      )}
    </div>
  );
}
