import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/StarWars-Things/Things";
import ThingsHome from "./pages/StarWars-Things/Things-Home";
import ThingsStarships from "./pages/StarWars-Things/Things-Starships";
import StarshipsID from "./pages/StarWars-Things/Starships-Id";
import ThingsVehicles from "./pages/StarWars-Things/Things-Vehicles";
import VehicleID from "./pages/StarWars-Things/Vehicle-Id";
import ThingsSpecies from "./pages/StarWars-Things/Things-Species";
import SpecieID from "./pages/StarWars-Things/Species-Id";
import ThingsPlanets from "./pages/StarWars-Things/Things-Planets";
import PlanetID from "./pages/StarWars-Things/Planets-Id";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/person" element={<Person />} />

      <Route path="/things" element={<Things />}>
        <Route index element={<ThingsHome />} />

        <Route path="starships" element={<ThingsStarships />} />
        <Route path="/things/starships/:id" element={<StarshipsID />} />

        <Route path="vehicles" element={<ThingsVehicles />} />
        <Route path="/things/vehicles/:id" element={<VehicleID />} />

        <Route path="species" element={<ThingsSpecies />} />
        <Route path="/things/species/:id" element={<SpecieID />} />
        
        <Route path="planets" element={<ThingsPlanets />} />
        <Route path="/things/planets/:id" element={<PlanetID />} />

      </Route>
      
    </Routes>
  );
}

export default App;
