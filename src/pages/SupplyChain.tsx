import React from 'react';
import Chart from '../components/Chart';
import MetricCard from '../components/MetricCard';
import { Truck, MapPin, Clock, Users } from 'lucide-react';

const SupplyChain = () => {
  const supplyChainKPIs = [
    {
      title: 'Collection Centers',
      value: '18,600+',
      change: '+245',
      trend: 'up' as const,
      icon: MapPin,
      color: 'bg-blue-500'
    },
    {
      title: 'Avg Collection Time',
      value: '4.2 hrs',
      change: '-0.3 hrs',
      trend: 'up' as const,
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      title: 'Active Farmers',
      value: '3.6M+',
      change: '+125K',
      trend: 'up' as const,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Fleet Efficiency',
      value: '94.8%',
      change: '+2.1%',
      trend: 'up' as const,
      icon: Truck,
      color: 'bg-orange-500'
    }
  ];

  const collectionData = [
    { month: 'Jan', volume: 22.1, centers: 18200 },
    { month: 'Feb', volume: 22.8, centers: 18350 },
    { month: 'Mar', volume: 23.5, centers: 18450 },
    { month: 'Apr', volume: 23.9, centers: 18520 },
    { month: 'May', volume: 24.2, centers: 18580 },
    { month: 'Jun', volume: 24.6, centers: 18600 }
  ];

  const distributionChannels = [
    { channel: 'Retail Outlets', outlets: '10,50,000+', contribution: 65, growth: '+8.2%' },
    { channel: 'Modern Trade', outlets: '8,500+', contribution: 18, growth: '+22.4%' },
    { channel: 'E-commerce', outlets: '15+', contribution: 7, growth: '+156.8%' },
    { channel: 'Institutional', outlets: '2,200+', contribution: 10, growth: '+5.7%' }
  ];

  const logisticsMetrics = [
    { metric: 'On-time Delivery', value: '96.8%', target: '95%', status: 'good' },
    { metric: 'Cold Chain Integrity', value: '99.2%', target: '98%', status: 'good' },
    { metric: 'Fleet Utilization', value: '87.4%', target: '85%', status: 'good' },
    { metric: 'Fuel Efficiency', value: '12.8 km/l', target: '12 km/l', status: 'good' },
    { metric: 'Route Optimization', value: '94.5%', target: '90%', status: 'good' },
    { metric: 'Delivery Accuracy', value: '99.7%', target: '99%', status: 'good' }
  ];

  const regionalDistribution = [
    { region: 'Gujarat', centers: 8500, farmers: '1.2M', volume: '12.5 MLPD' },
    { region: 'Rajasthan', centers: 3200, farmers: '850K', volume: '4.8 MLPD' },
    { region: 'Maharashtra', centers: 2800, farmers: '720K', volume: '3.2 MLPD' },
    { region: 'Madhya Pradesh', centers: 2100, farmers: '580K', volume: '2.1 MLPD' },
    { region: 'Uttar Pradesh', centers: 1900, farmers: '450K', volume: '2.0 MLPD' }
  ];

  return (
    <div className="space-y-6">
      {/* Supply Chain KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {supplyChainKPIs.map((kpi, index) => (
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

      {/* Collection & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Milk Collection Trend</h3>
          <Chart 
            type="area" 
            data={collectionData} 
            dataKey="volume" 
            xAxisKey="month"
            height={300}
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Distribution Channels</h3>
          <div className="space-y-4">
            {distributionChannels.map((channel, index) => (
              <div key={index} className="border rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{channel.channel}</h4>
                  <span className="text-sm font-medium text-green-600">{channel.growth}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs md:text-sm text-gray-600">{channel.outlets} outlets</span>
                  <span className="text-xs md:text-sm font-medium text-gray-900">{channel.contribution}% contribution</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" 
                    style={{width: `${channel.contribution * 1.5}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logistics Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Logistics Performance Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {logisticsMetrics.map((metric, index) => (
            <div key={index} className="p-3 md:p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{metric.metric}</h4>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ✓
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Actual:</span>
                  <span className="font-medium">{metric.value}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Target:</span>
                  <span className="font-medium">{metric.target}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Regional Collection Network</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Region</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Collection Centers</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Active Farmers</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Daily Volume</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Network Density</th>
              </tr>
            </thead>
            <tbody>
              {regionalDistribution.map((region, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-900">{region.region}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{region.centers.toLocaleString()}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{region.farmers}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{region.volume}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${(region.centers / 8500) * 100}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;