"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function LeadCharts({
  totalQuotes,
  totalContacts,
  totalNew,
  totalContacted,
  totalClosed,
}: {
  totalQuotes: number;
  totalContacts: number;
  totalNew: number;
  totalContacted: number;
  totalClosed: number;
}) {
  const sourceData = [
    { name: "Quote", value: totalQuotes },
    { name: "Contact", value: totalContacts },
  ];

  const statusData = [
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
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h3>Lead Sources</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sourceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h3>Lead Status</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

