"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Current Spend",
    value: 250,
  },
  {
    name: "Optimized",
    value: 30,
  },
];

export default function AnalyticsChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="value" fill="#ec4899" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}