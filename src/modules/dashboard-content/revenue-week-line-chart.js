import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", prevWeek: 10, currentWeek: 12 },
  { month: "Feb", prevWeek: 15, currentWeek: 18 },
  { month: "Mar", prevWeek: 20, currentWeek: 22 },
  { month: "Apr", prevWeek: 18, currentWeek: 21 },
  { month: "May", prevWeek: 25, currentWeek: 27 },
  { month: "Jun", prevWeek: 30, currentWeek: 28 },
];

// Solid line data (first 4 months)
const solidCurrent = data.map((d, i) =>
  i <= 3 ? { ...d } : { ...d, currentWeek: null }
);

// Dashed line data (from index 3 onwards) -> repeat last solid value at start for continuity
const dashedCurrent = data.map((d, i) =>
  i >= 3 ? { ...d } : { ...d, currentWeek: null }
);

const ContinuousDashedLineChart = () => {
  return (
    <>
       <div className="flex flex-row gap-12">
       <div className="font-inter font-semibold text-sm leading-[20px] pb-4">
        {"Revenue |"}
      </div><div className="font-inter font-semibold text-sm leading-[20px] pb-4">
        {"Current Week  $58,211"}
      </div>
      <div className="font-inter font-semibold text-sm leading-[20px] pb-4">
        {"Previous Week  $68,768"}
      </div>
       </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            ticks={[0, 10, 20, 30]}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip formatter={(value) => `${value}M`} />
          <Legend />

          {/* Previous week - solid */}
          <Line
            type="monotone"
            dataKey="prevWeek"
            stroke="#8884d8"
            strokeWidth={2}
            name="Previous Week"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          {/* Current week - solid part */}
          <Line
            type="monotone"
            data={solidCurrent}
            dataKey="currentWeek"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          {/* Current week - dashed part, start at last solid value for continuity */}
          <Line
            type="monotone"
            data={dashedCurrent}
            dataKey="currentWeek"
            stroke="#82ca9d"
            strokeWidth={2}
            strokeDasharray="2 2"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ContinuousDashedLineChart;
