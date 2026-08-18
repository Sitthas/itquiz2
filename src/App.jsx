import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;