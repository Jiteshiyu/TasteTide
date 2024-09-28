import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/index.jsx";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center pb-4 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-3xl text-red-600 font-bold">
        <NavLink to={"/"}>TasteTide</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black text-xl font-medium hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black text-xl font-medium hover:text-gray-700 duration-300"
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
