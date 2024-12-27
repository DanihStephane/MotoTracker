import React from 'react';
import type { FuelEntry } from '../types/fuel';

interface HistoryListProps {
  entries: FuelEntry[];
}

export const HistoryList: React.FC<HistoryListProps> = ({ entries }) => {
  return (
    <div className="space-y-4">
      {entries.map(entry => (
        <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {new Date(entry.date).toLocaleDateString()}
            </div>
            <div className="text-blue-600 font-semibold">
              {entry.consumption?.toFixed(2)} L/100km
            </div>
          </div>
          
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>Distance: {entry.kmDriven} km</div>
            <div>Coût: {entry.totalCost?.toFixed(2)} €</div>
            <div>Litres: {entry.liters} L</div>
            <div>Prix/L: {entry.pricePerLiter} €</div>
          </div>
        </div>
      ))}
    </div>
  );
};