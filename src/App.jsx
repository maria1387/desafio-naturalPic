import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Favorites from "./view/Favorites";
import Home from "./view/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
