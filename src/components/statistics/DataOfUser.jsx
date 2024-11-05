import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const generateFakeData = () => {
  const data = [];
  for (let i = 0; i < 28; i++) {
    data.push({
      date: new Date(
        Date.now() - (27 - i) * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      purchases: Math.floor(Math.random() * 10) + 1,
    });
  }
  return data;
};

const DataOfUser = () => {
  const data = generateFakeData();

  return (
    <div className="mt-10">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="purchases"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataOfUser;
