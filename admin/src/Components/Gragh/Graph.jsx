import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import './Gragh.css';

function Gragh({ type }) {
  const dummyData = {
    revenue: [
      { name: 'Jan', value: 5000 },
      { name: 'Feb', value: 6200 },
      { name: 'Mar', value: 7200 },
      { name: 'Apr', value: 4800 },
    ],
    bookings: [
      { name: 'Jan', value: 120 },
      { name: 'Feb', value: 140 },
      { name: 'Mar', value: 180 },
      { name: 'Apr', value: 100 },
    ],
    flights: [
      { name: 'Jan', value: 20 },
      { name: 'Feb', value: 25 },
      { name: 'Mar', value: 30 },
      { name: 'Apr', value: 22 },
    ],
    users: [
      { name: 'Jan', value: 300 },
      { name: 'Feb', value: 400 },
      { name: 'Mar', value: 500 },
      { name: 'Apr', value: 450 },
    ]
  };

  const data = dummyData[type];

  if (!data) return null;

  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2469ff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Gragh;
