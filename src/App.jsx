import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Create this file

function App() {
  return (
    <>
      <nav className="w-full h-10 border-b-2 border-gray-200 flex items-center justify-between px-4">
        <h2>Header</h2>
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
