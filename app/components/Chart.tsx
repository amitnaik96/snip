"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const ClickChart = ({ clicks }: { clicks: number }) => {
  const data = [
    { name: 'Total Clicks', clicks },
  ];

  return (
    <ResponsiveContainer width={300} height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="clicks" fill="#0284c7" barSize={70} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
