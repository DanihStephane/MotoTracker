import { Observable } from '@nativescript/core';
import { FuelEntry, FuelEntryModel } from './models/fuel-entry';

export class MainViewModel extends Observable {
  private _fuelEntries: FuelEntry[] = [];
  private _currentFuelLevel: number = 75;

  constructor() {
    super();
    
    // Exemple de données
    this.addFuelEntry({
      id: '1',
      date: new Date(),
      liters: 15,
      pricePerLiter: 1.85,
      odometerBefore: 12500,
      odometerAfter: 12800
    });
  }

  get fuelEntries(): FuelEntry[] {
    return this._fuelEntries;
  }

  get currentFuelLevel(): number {
    return this._currentFuelLevel;
  }

  get lastEntryStats(): string {
    const lastEntry = this._fuelEntries[0];
    if (!lastEntry) return "Aucune donnée";
    return `${lastEntry.consumption?.toFixed(2)} L/100km`;
  }

  addFuelEntry(entry: FuelEntry) {
    const calculatedEntry = FuelEntryModel.calculateStats(entry);
    this._fuelEntries.unshift(calculatedEntry);
    this.notifyPropertyChange('fuelEntries', this._fuelEntries);
    
    // Mise à jour du niveau de carburant estimé
    this._currentFuelLevel = 100;
    this.notifyPropertyChange('currentFuelLevel', this._currentFuelLevel);
  }

  onNewFuelEntry() {
    // Cette fonction sera implémentée pour ouvrir le formulaire de nouveau plein
    console.log("Nouveau plein");
  }
}