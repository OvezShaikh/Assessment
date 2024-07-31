import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Loginpage from './Components/Loginpage';
import Register from "./Components/Register";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/Loginpage" element={<Loginpage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Search" element={<Search />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
