"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    day: "Mon",
    earnings: 130,
  },
  {
    day: "Tue",
    earnings: 85,
  },
  {
    day: "Wed",
    earnings: 145,
  },
  {
    day: "Thu",
    earnings: 102,
  },
  {
    day: "Fri",
    earnings: 182,
  },
  {
    day: "Sat",
    earnings: 210,
  },
  {
    day: "Sun",
    earnings: 192,
  },
]

export default function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

