import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <>
      <nav className="w-full h-10 border-b-2 border-gray-200 flex items-center justify-between px-4">
        <h2>Header</h2>
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
