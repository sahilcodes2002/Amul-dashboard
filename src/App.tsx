import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import FinancialPerformance from './pages/FinancialPerformance';
import ProductionAnalysis from './pages/ProductionAnalysis';
import QualityMetrics from './pages/QualityMetrics';
import SupplyChain from './pages/SupplyChain';
import MarketAnalysis from './pages/MarketAnalysis';
import OperationalEfficiency from './pages/OperationalEfficiency';
import SustainabilityReports from './pages/SustainabilityReports';
import ChatWidget from './components/ChatWidget';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-ibm-plex w-full max-w-full overflow-x-hidden">
        <div className="flex flex-row w-full max-w-full min-w-0">
          <Sidebar />
          <div className="flex-1 ml-64 min-w-0 w-full max-w-full flex flex-col">
            <Header />
            <main className="p-2 sm:p-4 md:p-6 w-full max-w-full min-w-0">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/financial" element={<FinancialPerformance />} />
                <Route path="/production" element={<ProductionAnalysis />} />
                <Route path="/quality" element={<QualityMetrics />} />
                <Route path="/supply-chain" element={<SupplyChain />} />
                <Route path="/market" element={<MarketAnalysis />} />
                <Route path="/operations" element={<OperationalEfficiency />} />
                <Route path="/sustainability" element={<SustainabilityReports />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
      <ChatWidget />
    </Router>
  );
};

export default App;
