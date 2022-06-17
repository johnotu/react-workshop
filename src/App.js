import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/StarWars-Things/Things";
import ThingsHome from "./pages/StarWars-Things/Things-Home";
import ThingsStarships from "./pages/StarWars-Things/Things-Starships";
import ThingsVehicles from "./pages/StarWars-Things/Things-Vehicles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/person" element={<Person />} />
      <Route path="/things" element={<Things />}>
        <Route index element={<ThingsHome />} />
        <Route path="starships" element={<ThingsStarships />} />
        <Route path="vehicles" element={<ThingsVehicles />} />
      </Route>
    </Routes>
  );
}

export default App;
