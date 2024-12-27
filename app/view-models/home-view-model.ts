import { Observable } from '@nativescript/core';
import { FuelEntry } from '../models/fuel-entry';

export class HomeViewModel extends Observable {
  private _currentFuelLevel: number = 75; // Percentage
  private _lastEntry: FuelEntry | null = null;
  
  constructor() {
    super();
  }

  get currentFuelLevel(): number {
    return this._currentFuelLevel;
  }

  get lastEntryStats(): string {
    if (!this._lastEntry) {
      return "Aucune donnée disponible";
    }
    return `Dernière conso: ${this._lastEntry.consumption?.toFixed(2)} L/100km`;
  }

  updateFuelLevel(newLevel: number) {
    this._currentFuelLevel = Math.max(0, Math.min(100, newLevel));
    this.notifyPropertyChange('currentFuelLevel', this._currentFuelLevel);
  }
}