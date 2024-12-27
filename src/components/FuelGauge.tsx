import React from 'react';

interface FuelGaugeProps {
  level: number;
}

export const FuelGauge: React.FC<FuelGaugeProps> = ({ level }) => {
  const percentage = Math.min(Math.max(level, 0), 100);
  
  return (
    <div className="relative w-48 h-48">
      <svg className="transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="stroke-gray-200"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="10"
        />
        <circle
          className="stroke-blue-600 transition-all duration-300"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="10"
          strokeDasharray={`${percentage * 2.827} 282.7`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};