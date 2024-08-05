import "./App.css";
import FoodMain from "./components/foodMain";
import FoodMap from "./components/foodMap";
import FoodSG from "./components/foodSG";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FoodMain />} />
        <Route path="/foodmap" element={<FoodMap />} />
        <Route path="/food-jamsil" element={<FoodSG />} />
      </Routes>
    </div>
  );
}

export default App;
