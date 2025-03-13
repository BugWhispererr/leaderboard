// src/App.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import LeaderboardChart from "../src/leaderboard"; // Adjust the import path to your file
import React from "react";

interface LeaderboardEntry {
  name: string;
  score: number;
}

function App() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Fetch leaderboard data every 5 seconds
      axios
        .get("http://127.0.0.1:5000/leaderboard") // Update this URL to your API
        .then((response) => setLeaderboard(response.data))
        .catch((error) => console.error("Error fetching leaderboard:", error));
    }, 5000); // Adjust the interval as needed

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          🏆 Leaderboard 🏆
        </h1>
        <ul className="space-y-2 mb-6">
          {leaderboard.map((entry, index) => (
            <li key={index} className="p-2 bg-gray-700 rounded-md">
              <span className="font-bold">#{index + 1}</span> {entry.name} -{" "}
              {entry.score} points
            </li>
          ))}
        </ul>
        {/* Pass the leaderboard data to the chart */}
        <LeaderboardChart data={leaderboard} />
      </div>
    </div>
  );
}

export default App;
