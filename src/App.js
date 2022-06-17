import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/Things";
import ThingsHome from "./pages/Things-Home";
import ThingsStarShips from "./pages/Things-Starships";
import ThingsVehicles from "./pages/Things-Vehicles";
import ThingsSpecies from "./pages/Things-Species";
import ThingsPlanets from "./pages/Things-Planets";
import StarShipDetails from "./pages/StarShip-Details"
import VehicleDetails from "./pages/Vehicle-Details";
import SpecieDetails from "./pages/Specie-Details";
import PlanetDetails from "./pages/Planet-Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/person" element={<Person />} />
      <Route path="/things" element={<Things />}>
        <Route index element={<ThingsHome />} />
        <Route path="starShips" element={<ThingsStarShips />} />
        <Route path="/things/starShips/:id" element={<StarShipDetails />} />
        <Route path="vehicles" element={<ThingsVehicles />} />
        <Route path="/things/vehicles/:id" element={<VehicleDetails />} />
        <Route path="species" element={<ThingsSpecies />} />
        <Route path="/things/species/:id" element={<SpecieDetails />} />
        <Route path="planets" element={<ThingsPlanets />} />
        <Route path="/things/planets/:id" element={<PlanetDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
