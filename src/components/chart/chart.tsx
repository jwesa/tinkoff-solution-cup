import { IExpense } from "../../types";
import { Cell, Pie, PieChart } from "recharts";
import React from "react";

interface Props {
  list: IExpense[];
}

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Chart = ({ list }: Props) => {
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
    <PieChart width={250} height={250}>
      <Pie
        data={list}
        cx={"50%"}
        cy={"50%"}
        labelLine={false}
        dataKey="amount"
        label={renderCustomizedLabel}
        outerRadius={125}
        fill="#8884d8"
      />
      {list.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </PieChart>
  );
};
