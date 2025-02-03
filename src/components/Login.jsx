import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("data")) {
      navigate("/profile");
    }
  }, [navigate]);

  async function createLogin() {
    setMessage("loading");

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      let UserData = { token: data.accessToken, id: data.id };

      if (data.accessToken) {
        localStorage.setItem("data", JSON.stringify(UserData));
        setMessage("Login Success");
        navigate("/profile");
      } else {
        setMessage("Invalid credentials");
      }
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div className="w-1/2 mt-32 rounded-2xl mx-auto flex items-center flex-col gap-10">
      <h1 className="hover:text-amber-400 text-5xl mt-5">Login</h1>
      <div className="flex flex-col mx-auto space-y-10 w-2/3 mt-10 text-2xl">
        <input
          className="border-b-2 hover:border-b-amber-400 border-b-white"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-b-2 hover:border-b-amber-400 border-b-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={createLogin}
        className="hover:bg-amber-400 mx-auto text-black bg-white font-bold rounded-lg px-8 py-2 text-xl"
      >
        Login
      </button>
      {message === "loading" ? <div className="loader"></div> : <p>{message}</p>}
    </div>
  );
};

export default Login;
