import { FuelEntry } from '../types/fuel';

export const calculateFuelStats = (entry: Omit<FuelEntry, 'id' | 'consumption' | 'costPerKm' | 'totalCost' | 'kmDriven'>): FuelEntry => {
  const kmDriven = entry.odometerAfter - entry.odometerBefore;
  const totalCost = entry.liters * entry.pricePerLiter;
  
  return {
    ...entry,
    id: crypto.randomUUID(),
    kmDriven,
    consumption: (entry.liters * 100) / kmDriven,
    costPerKm: totalCost / kmDriven,
    totalCost
  };
};