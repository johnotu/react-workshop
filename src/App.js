import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Things from "./pages/Things";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People/>} />
      <Route path="/person"  element={<Person />} />
      <Route path="/things"  element={<Things />} />
    </Routes>
  );
}

export default App;
