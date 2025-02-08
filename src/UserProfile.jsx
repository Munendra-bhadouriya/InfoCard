import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-all p-4">

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 rounded-full shadow-lg text-white dark:text-black font-bold transition 
          bg-primary hover:bg-blue-600 dark:bg-yellow-400 dark:hover:bg-yellow-500"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-neumorphic dark:shadow-neumorphicDark p-6 max-w-sm w-full text-center transition-all transform hover:scale-105 duration-300 backdrop-blur-lg bg-opacity-60 dark:bg-opacity-70">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-white/20 dark:from-gray-800/20 dark:to-gray-900/30 backdrop-blur-md rounded-3xl"></div>

        <img
          className="relative w-32 h-32 mx-auto rounded-full border-4 border-primary dark:border-yellow-400 shadow-lg"
          src={user.picture.large}
          alt="User Profile"
        />

        <h2 className="relative text-2xl font-semibold text-gray-900 dark:text-white mt-4">
          {user.name.first} {user.name.last}
        </h2>
        <p className="relative text-gray-600 dark:text-gray-300 text-lg">
          {user.email}
        </p>

        <div className="relative mt-4 space-y-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            📍 <strong>Location:</strong> {user.location.city}, {user.location.country}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            📞 <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            ⚧️ <strong>Gender:</strong> {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
          </p>
        </div>

        <button className="relative mt-4 px-6 py-2 rounded-lg bg-primary hover:bg-blue-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-black font-bold shadow-lg transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
