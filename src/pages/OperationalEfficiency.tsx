import React from 'react';
import MetricCard from '../components/MetricCard';
import { Settings, Zap, Clock, Target } from 'lucide-react';

const OperationalEfficiency = () => {
  const efficiencyKPIs = [
    {
      title: 'Overall Efficiency',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up' as const,
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Energy Efficiency',
      value: '87.2%',
      change: '+1.8%',
      trend: 'up' as const,
      icon: Zap,
      color: 'bg-blue-500'
    },
    {
      title: 'Process Optimization',
      value: '91.5%',
      change: '+3.1%',
      trend: 'up' as const,
      icon: Settings,
      color: 'bg-purple-500'
    },
    {
      title: 'Downtime Reduction',
      value: '96.8%',
      change: '+1.2%',
      trend: 'up' as const,
      icon: Clock,
      color: 'bg-orange-500'
    }
  ];

  const plantEfficiency = [
    { plant: 'Anand Plant', efficiency: 96.2, energy: 89.5, downtime: 2.1, oee: 94.8 },
    { plant: 'Gandhinagar Plant', efficiency: 94.8, energy: 87.2, downtime: 3.2, oee: 92.5 },
    { plant: 'Mehsana Plant', efficiency: 95.5, energy: 88.9, downtime: 2.8, oee: 93.7 },
    { plant: 'Palanpur Plant', efficiency: 93.2, energy: 85.8, downtime: 4.1, oee: 91.2 },
    { plant: 'Rajkot Plant', efficiency: 94.9, energy: 87.8, downtime: 3.5, oee: 92.8 }
  ];

  const processMetrics = [
    { process: 'Milk Reception', efficiency: 98.5, target: 95, variance: '+3.5%' },
    { process: 'Pasteurization', efficiency: 97.2, target: 95, variance: '+2.2%' },
    { process: 'Packaging', efficiency: 94.8, target: 92, variance: '+2.8%' },
    { process: 'Cold Storage', efficiency: 99.1, target: 97, variance: '+2.1%' },
    { process: 'Quality Testing', efficiency: 96.7, target: 95, variance: '+1.7%' },
    { process: 'Distribution', efficiency: 93.4, target: 90, variance: '+3.4%' }
  ];

  const maintenanceData = [
    { equipment: 'Pasteurizers', scheduled: 45, completed: 44, efficiency: 97.8 },
    { equipment: 'Packaging Lines', scheduled: 38, completed: 37, efficiency: 97.4 },
    { equipment: 'Cooling Systems', scheduled: 52, completed: 51, efficiency: 98.1 },
    { equipment: 'Testing Equipment', scheduled: 28, completed: 28, efficiency: 100 },
    { equipment: 'Transport Fleet', scheduled: 156, completed: 152, efficiency: 97.4 }
  ];

  const costOptimization = [
    { category: 'Energy Costs', current: '₹245 Cr', target: '₹230 Cr', savings: '₹15 Cr', percentage: 6.1 },
    { category: 'Raw Materials', current: '₹1,850 Cr', target: '₹1,820 Cr', savings: '₹30 Cr', percentage: 1.6 },
    { category: 'Transportation', current: '₹180 Cr', target: '₹170 Cr', savings: '₹10 Cr', percentage: 5.6 },
    { category: 'Maintenance', current: '₹95 Cr', target: '₹88 Cr', savings: '₹7 Cr', percentage: 7.4 }
  ];

  return (
    <div className="space-y-6">
      {/* Efficiency KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {efficiencyKPIs.map((kpi, index) => (
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

      {/* Plant Efficiency */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Plant-wise Efficiency Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Plant</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Overall Efficiency</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Energy Efficiency</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Downtime (%)</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">OEE</th>
              </tr>
            </thead>
            <tbody>
              {plantEfficiency.map((plant, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-900">{plant.plant}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      plant.efficiency >= 95 ? 'bg-green-100 text-green-800' :
                      plant.efficiency >= 90 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {plant.efficiency}%
                    </span>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{plant.energy}%</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{plant.downtime}%</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{plant.oee}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Process Efficiency */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Process Efficiency Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {processMetrics.map((process, index) => (
            <div key={index} className="p-3 md:p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{process.process}</h4>
                <span className="text-sm font-medium text-green-600">{process.variance}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-medium">{process.efficiency}%</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Target:</span>
                  <span className="font-medium">{process.target}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{width: `${(process.efficiency / 100) * 100}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Maintenance Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Equipment Type</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Scheduled</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Completed</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Efficiency</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceData.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-900">{item.equipment}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{item.scheduled}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{item.completed}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.efficiency >= 98 ? 'bg-green-100 text-green-800' :
                      item.efficiency >= 95 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.efficiency}%
                    </span>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.efficiency >= 98 ? 'bg-green-600' :
                          item.efficiency >= 95 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{width: `${item.efficiency}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost Optimization */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Cost Optimization Initiatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {costOptimization.map((cost, index) => (
            <div key={index} className="p-3 md:p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <h4 className="font-semibold text-gray-900">{cost.category}</h4>
                <span className="text-sm font-medium text-green-600">-{cost.percentage}%</span>
              </div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-medium">{cost.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Target:</span>
                  <span className="font-medium">{cost.target}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Potential Savings:</span>
                  <span className="font-medium text-green-600">{cost.savings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationalEfficiency;