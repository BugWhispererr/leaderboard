// src/components/LeaderboardChart.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data structure for the leaderboard
const data = [
  { name: "John", score: 4000 },
  { name: "Alice", score: 3000 },
  { name: "Bob", score: 2000 },
  { name: "Charlie", score: 2780 },
  { name: "David", score: 1890 },
];

const LeaderboardChart: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Leaderboard Visualization</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeaderboardChart;
