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