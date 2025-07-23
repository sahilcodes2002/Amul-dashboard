import React from 'react';
import Chart from '../components/Chart';
import MetricCard from '../components/MetricCard';
import { Factory, Package, Zap, Clock } from 'lucide-react';

const ProductionAnalysis = () => {
  // Updated KPIs based on real-world data
  const productionKPIs = [
    {
      title: 'Daily Milk Procurement',
      value: '25.2 MLPD',
      change: '+8.7%',
      trend: 'up' as const,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Processing Capacity',
      value: '91 Plants',
      change: '+3 New',
      trend: 'up' as const,
      icon: Factory,
      color: 'bg-green-500'
    },
    {
      title: 'Capacity Utilization',
      value: '88.1%',
      change: '+3.7%',
      trend: 'up' as const,
      icon: Zap,
      color: 'bg-orange-500'
    },
    {
      title: 'Production Efficiency',
      value: '95.2%',
      change: '+2.1%',
      trend: 'up' as const,
      icon: Clock,
      color: 'bg-purple-500'
    }
  ];

  // Updated production data
  const productionData = [
    { month: 'Jan', liquidMilk: 19.2, powder: 2.3, butter: 0.91, cheese: 0.17 },
    { month: 'Feb', liquidMilk: 20.1, powder: 2.5, butter: 0.94, cheese: 0.19 },
    { month: 'Mar', liquidMilk: 21.5, powder: 2.7, butter: 0.97, cheese: 0.20 },
    { month: 'Apr', liquidMilk: 22.2, powder: 2.9, butter: 1.00, cheese: 0.22 },
    { month: 'May', liquidMilk: 23.8, powder: 3.1, butter: 1.04, cheese: 0.24 },
    { month: 'Jun', liquidMilk: 25.2, powder: 3.3, butter: 1.07, cheese: 0.26 }
  ];

  // Updated plant capacity data
  const capacityData = [
    { plant: 'Anand Plant', capacity: 97, utilization: 94 },
    { plant: 'Gandhinagar Plant', capacity: 90, utilization: 87 },
    { plant: 'Mehsana Plant', capacity: 94, utilization: 91 },
    { plant: 'Palanpur Plant', capacity: 87, utilization: 84 },
    { plant: 'Rajkot Plant', capacity: 92, utilization: 89 }
  ];

  // Updated product mix
  const productMix = [
    { name: 'Liquid Milk', value: 76, volume: '19.2 MLPD', growth: '+7.2%' },
    { name: 'Milk Powder', value: 14, volume: '2.3 MT', growth: '+13.1%' },
    { name: 'Butter', value: 7, volume: '910 MT', growth: '+5.2%' },
    { name: 'Cheese', value: 3, volume: '162 MT', growth: '+19.2%' }
  ];

  return (
    <div className="space-y-6">
      {/* Production KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {productionKPIs.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl shadow border border-gray-200 flex flex-col items-center justify-center py-4 px-2 md:px-4 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <kpi.icon className={`w-6 h-6 ${kpi.color} bg-opacity-20 rounded-full`} />
              <span className="text-sm font-semibold text-gray-700 truncate">{kpi.title}</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 truncate">{kpi.value}</div>
            <div className={`text-xs font-semibold ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* Production Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Production Volume</h3>
          <Chart 
            type="bar" 
            data={productionData} 
            dataKey="liquidMilk" 
            xAxisKey="month"
            height={300}
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Mix Distribution</h3>
          <Chart 
            type="pie" 
            data={productMix} 
            dataKey="value"
            height={300}
          />
        </div>
      </div>

      {/* Plant Capacity Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Plant Capacity Utilization</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Plant</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Capacity (%)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Utilization (%)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              {capacityData.map((plant, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{plant.plant}</td>
                  <td className="py-3 px-4 text-gray-700">{plant.capacity}%</td>
                  <td className="py-3 px-4 text-gray-700">{plant.utilization}%</td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          plant.utilization >= 90 ? 'bg-green-600' :
                          plant.utilization >= 80 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{width: `${plant.utilization}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productMix.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">{product.name}</h4>
              <span className="text-sm font-medium text-green-600">{product.growth}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Volume</span>
                <span className="font-medium">{product.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Share</span>
                <span className="font-medium">{product.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{width: `${product.value}%`}}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionAnalysis;