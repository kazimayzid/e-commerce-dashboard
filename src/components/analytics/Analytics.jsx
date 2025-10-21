import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Chart",
    },
  },
};

export default function Analytics() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  const sales2024 = [300, 450, 700, 200, 650, 500, 800, 900];
  const sales2025 = [400, 550, 750, 300, 850, 600, 900, 1300];
  const sales2026 = [250, 450, 650, 350, 750, 550, 800, 950];

  const data = {
    labels,
    datasets: [
      {
        label: "Data = 2024",
        data: sales2024,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Data = 2025",
        data: sales2025,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Data = 2026",
        data: sales2026,
        backgroundColor: "rgba(125, 165, 535, 0.5)",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <Bar options={options} data={data} />
    </div>
  );
}
