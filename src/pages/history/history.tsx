import React from "react";
import { Cell, Pie, PieChart } from "recharts";

import { useStore } from "../../hooks";
import { observer } from "mobx-react-lite";

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const History = observer(() => {
  const { expenses } = useStore();

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <PieChart width={250} height={250}>
        <Pie
          data={expenses.list}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          dataKey="amount"
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
        />
        {expenses.list.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </PieChart>
    </div>
  );
});
