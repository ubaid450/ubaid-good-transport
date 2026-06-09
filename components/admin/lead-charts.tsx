"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

type MonthlyData = {
  month: string;
  quotes: number;
  contacts: number;
  total: number;
};

export default function LeadCharts({
  totalQuotes,
  totalContacts,
  totalNew,
  totalContacted,
  totalClosed,
  monthlyData,
}: {
  totalQuotes: number;
  totalContacts: number;
  totalNew: number;
  totalContacted: number;
  totalClosed: number;
  monthlyData: MonthlyData[];
}) {
  const sourceData = [
    { name: "Quote", value: totalQuotes },
    { name: "Contact", value: totalContacts },
  ];

  const funnelData = [
    { name: "Total", value: totalQuotes + totalContacts },
    { name: "New", value: totalNew },
    { name: "Contacted", value: totalContacted },
    { name: "Closed", value: totalClosed },
  ];

  return (
    <div
      style={{
        marginTop: "24px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div style={cardStyle}>
        <h3>Lead Sources</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sourceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={cardStyle}>
        <h3>Conversion Funnel</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnelData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ ...cardStyle, gridColumn: "1 / -1" }}>
        <h3>Monthly Growth</h3>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="quotes" stroke="#2563eb" strokeWidth={3} />
            <Line type="monotone" dataKey="contacts" stroke="#16a34a" strokeWidth={3} />
            <Line type="monotone" dataKey="total" stroke="#dc2626" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
};