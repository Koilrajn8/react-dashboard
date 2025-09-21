import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projection: 10, actual: 12 },
  { month: "Feb", projection: 15, actual: 18 },
  { month: "Mar", projection: 22, actual: 20 },
  { month: "Apr", projection: 20, actual: 25 },
  { month: "May", projection: 26, actual: 28 },
  { month: "Jun", projection: 25, actual: 22 },
];

const BarGraph = () => {
  return (
    <>
      <div className="font-inter font-semibold text-sm leading-[20px] pb-4">
        {"Projections vs Actuals"}
      </div>
      <ResponsiveContainer width={"100%"} height={200}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `${value}M`}
            ticks={[0, 10, 20, 30]} 
          />
          <Tooltip formatter={(value) => `${value}M`} />
          <Legend />

          {/* Stacked Bars */}
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#A8C5DA"
            name="Projection"
          />
          <Bar dataKey="actual" stackId="a" fill="#A8C5DA" name="Actual" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
