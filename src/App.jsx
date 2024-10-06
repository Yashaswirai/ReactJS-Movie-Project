import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Trending } from "./components/Index";
function App() {
  return (
    <div className="w-screen h-screen bg-[#000000] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
