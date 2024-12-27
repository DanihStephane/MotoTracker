export interface FuelEntry {
  id: string;
  date: Date;
  liters: number;
  pricePerLiter: number;
  odometerBefore: number;
  odometerAfter: number;
  consumption?: number;
  costPerKm?: number;
  totalCost?: number;
  kmDriven?: number;
}

export class FuelEntryModel {
  static calculateStats(entry: FuelEntry): FuelEntry {
    const kmDriven = entry.odometerAfter - entry.odometerBefore;
    const totalCost = entry.liters * entry.pricePerLiter;
    
    return {
      ...entry,
      kmDriven,
      consumption: (entry.liters * 100) / kmDriven,
      costPerKm: totalCost / kmDriven,
      totalCost
    };
  }
}