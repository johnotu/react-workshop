import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/Things";
import ThingsHome from "./pages/Things-Home";
import ThingsStarships from "./pages/Things-Starships";
import Starship from "./pages/Starship";
import ThingsVehicles from "./pages/Things-Vehicles";
import Vehicle from "./pages/vehicle"
import ThingsSpecies from "./pages/Things-Species";
import Specie from "./pages/specie"
import ThingsPlanets from "./pages/Things-Planets";
import Planet from "./pages/planet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/person" element={<Person />} />
      <Route path="/things" element={<Things />}>
        <Route index element={<ThingsHome />} />
        <Route path="starships" element={<ThingsStarships />} />
        <Route path="/things/starship/:id" element={<Starship />} />
        <Route path="vehicles" element={<ThingsVehicles />} />
        <Route path="/things/vehicle/:id" element={<Vehicle />} />
        <Route path="species" element={<ThingsSpecies />} />
        <Route path="/things/specie/:id" element={<Specie />} />
        <Route path="planets" element={<ThingsPlanets />} />
        <Route path="/things/planet/:id" element={<Planet />} />
      </Route>
    </Routes>
  );
}

export default App;
