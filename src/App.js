import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/Things";
import ThingsHome from "./pages/Things-Home";
import ThingsStarships from "./pages/Things-Starships";
import ThingsVehicles from "./pages/Things-Vehicles";

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
      </Route>
    </Routes>
  );
}

export default App;
