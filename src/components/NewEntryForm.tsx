import React, { useState } from 'react';
import { calculateFuelStats } from '../utils/fuelCalculations';
import type { FuelEntry } from '../types/fuel';

interface NewEntryFormProps {
  onSubmit: (entry: FuelEntry) => void;
}

export const NewEntryForm: React.FC<NewEntryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    liters: '',
    pricePerLiter: '',
    odometerBefore: '',
    odometerAfter: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const entry = calculateFuelStats({
      date: new Date(),
      liters: Number(formData.liters),
      pricePerLiter: Number(formData.pricePerLiter),
      odometerBefore: Number(formData.odometerBefore),
      odometerAfter: Number(formData.odometerAfter)
    });

    onSubmit(entry);
    setFormData({ liters: '', pricePerLiter: '', odometerBefore: '', odometerAfter: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Litres ajoutés</label>
        <input
          type="number"
          step="0.01"
          required
          value={formData.liters}
          onChange={e => setFormData(prev => ({ ...prev, liters: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Prix par litre (€)</label>
        <input
          type="number"
          step="0.001"
          required
          value={formData.pricePerLiter}
          onChange={e => setFormData(prev => ({ ...prev, pricePerLiter: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Kilométrage avant</label>
        <input
          type="number"
          required
          value={formData.odometerBefore}
          onChange={e => setFormData(prev => ({ ...prev, odometerBefore: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Kilométrage après</label>
        <input
          type="number"
          required
          value={formData.odometerAfter}
          onChange={e => setFormData(prev => ({ ...prev, odometerAfter: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Ajouter
      </button>
    </form>
  );
};