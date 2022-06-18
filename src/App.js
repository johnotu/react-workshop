import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/Things";
import ThingsHome from "./pages/Things-Home";
import ThingsStarships from "./pages/Things-Starships";
import ThingsVehicles from "./pages/Things-Vehicles";
import ThingsPlanets from "./pages/Things-Planets";
import ThingsSpecies from "./pages/Things-Species";
import ThingsStarshipDetails from './pages/Things-Starship-Details'
import ThingsVehicle from './pages/Things-Vehicle'
import ThingsPlanetDetails from './pages/Things-Planet-Details'
import ThingsSpecieDetails from './pages/Things-Specie-Details'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<Person />} />
      <Route path="/things" element={<Things />}>
        <Route index element={<ThingsHome />} />
        <Route path="starships" element={<ThingsStarships />} />
        <Route path="vehicles" element={<ThingsVehicles />} />
        <Route path="planets" element={<ThingsPlanets/>} />
        <Route path="species" element={<ThingsSpecies/>} />
        <Route path="/things/starships/:id" element={<ThingsStarshipDetails/>}/>
        <Route path="/things/vehicles/:id" element={<ThingsVehicle/>}/>
        <Route path="/things/planets/:id" element={<ThingsPlanetDetails/>}/>
        <Route path="/things/species/:id" element={<ThingsSpecieDetails/>}/>
      </Route>
    </Routes>
  );
}

export default App;
