import React, { useState } from 'react';
import { FuelGauge } from './components/FuelGauge';
import { NewEntryForm } from './components/NewEntryForm';
import { HistoryList } from './components/HistoryList';
import type { FuelEntry } from './types/fuel';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'history' | 'stats'>('home');
  const [entries, setEntries] = useState<FuelEntry[]>([]);
  const [fuelLevel, setFuelLevel] = useState(75);

  const handleNewEntry = (entry: FuelEntry) => {
    setEntries(prev => [entry, ...prev]);
    // Simulate fuel level update based on tank capacity
    const estimatedLevel = Math.max(0, Math.min(100, fuelLevel + (entry.liters / 15) * 100));
    setFuelLevel(estimatedLevel);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">MotoTracker</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <nav className="bg-white rounded-lg shadow-sm">
            {(['home', 'history', 'stats'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="flex justify-center">
              <FuelGauge level={fuelLevel} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Nouveau Plein</h2>
              <NewEntryForm onSubmit={handleNewEntry} />
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Historique</h2>
            <HistoryList entries={entries} />
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
            <p className="text-gray-500">Fonctionnalité à venir...</p>
          </div>
        )}
      </main>
    </div>
  );
}