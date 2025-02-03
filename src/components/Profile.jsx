import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  let navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (parsedData.id) {
          fetch(`https://dummyjson.com/users/${parsedData.id}`)
            .then((res) => res.json())
            .then((data) => {
              setUserData(data);
              setLoading(false); // Set loading to false after fetching
            })
            .catch((error) => {
              console.error("Fetch error:", error);
              setLoading(false);
            });
        } else {
          console.warn("No valid user ID found in local storage.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error parsing local storage data:", error);
        setLoading(false);
      }
    } else {
      console.warn("No data found in local storage.");
      setLoading(false);
      navigate("/");
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="mx-10">
      <h1 className="text-5xl mt-5">Profile</h1>
      <div className="flex items-center flex-col gap-10">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <ProfileCard data={userData} />
        )}
        <button
          onClick={handleLogout}
          className="w-32 font-bold hover:bg-white duration-200 bg-amber-300 text-black px-10 py-4 rounded-2xl my-10">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
