import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Details from "./pages/Details.jsx";
import GlobalState from "./context/index.jsx";

export default function App() {
  return (
    <GlobalState>
      <div className="min-h-screen px-8 py-4 bg-white text-gray-600 text-lg">
        {/* Rendering the Navbar component */}
        <Navbar />
        {/* Setting up routes for the application */}
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} /> //
          {/* Route for Favorites page */}
          <Route path="/favorites" element={<Favorites />} />
          {/* Route for Recipe Details page */}
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </GlobalState>
  );
}

