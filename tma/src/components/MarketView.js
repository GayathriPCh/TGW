import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart object from Chart.js
import { CategoryScale } from 'chart.js'; // Import the CategoryScale component

const MarketView = () => {
  const [data, setData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'BTC',
        data: [40000, 45000, 47000, 42000, 48000],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
      // Add more datasets for other critters
    ],
  });

  // Register the CategoryScale component before creating the chart
  useEffect(() => {
    Chart.register(CategoryScale);
  }, []);

  return (
    <div>
      <h2>Market View</h2>
      <Line data={data} />
    </div>
  );
};

export default MarketView;
