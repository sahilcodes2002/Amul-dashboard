import React from 'react';
import Chart from '../components/Chart';
import MetricCard from '../components/MetricCard';
import { Target, TrendingUp, Users, Globe } from 'lucide-react';

const MarketAnalysis = () => {
  // Updated KPIs based on real-world data
  const marketKPIs = [
    {
      title: 'Market Share',
      value: '28.7%',
      change: '+2.3%',
      trend: 'up' as const,
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Brand Value',
      value: '₹70,000 Cr',
      change: '+16.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Customer Base',
      value: '52M+',
      change: '+9.2%',
      trend: 'up' as const,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Export Markets',
      value: '48',
      change: '+4',
      trend: 'up' as const,
      icon: Globe,
      color: 'bg-orange-500'
    }
  ];

  // Updated market share data
  const marketShareData = [
    { segment: 'Liquid Milk', amul: 29.1, motherDairy: 18.5, nestle: 13.2, others: 39.2 },
    { segment: 'Milk Powder', amul: 36.0, motherDairy: 22.5, nestle: 15.7, others: 25.8 },
    { segment: 'Butter', amul: 43.5, motherDairy: 19.8, nestle: 13.5, others: 23.2 },
    { segment: 'Cheese', amul: 39.7, motherDairy: 25.8, nestle: 17.1, others: 17.4 }
  ];

  // Updated competitor analysis
  const competitorAnalysis = [
    { competitor: 'Mother Dairy', marketShare: 18.5, revenue: '₹1,320 Cr', growth: '+8.9%' },
    { competitor: 'Nestle', marketShare: 13.2, revenue: '₹950 Cr', growth: '+6.7%' },
    { competitor: 'Britannia', marketShare: 9.8, revenue: '₹700 Cr', growth: '+5.1%' },
    { competitor: 'Heritage', marketShare: 7.6, revenue: '₹510 Cr', growth: '+12.5%' },
    { competitor: 'Others', marketShare: 22.2, revenue: '₹1,650 Cr', growth: '+5.9%' }
  ];

  // Updated export data
  const exportData = [
    { country: 'USA', revenue: 480, growth: 19.2, products: 'Milk Powder, Ghee' },
    { country: 'UAE', revenue: 410, growth: 23.1, products: 'Liquid Milk, Cheese' },
    { country: 'Bangladesh', revenue: 340, growth: 16.2, products: 'Milk Powder, Butter' },
    { country: 'Singapore', revenue: 300, growth: 29.7, products: 'Premium Products' },
    { country: 'Others', revenue: 1500, growth: 20.1, products: 'Various' }
  ];

  // Updated brand metrics
  const brandMetrics = [
    { metric: 'Brand Awareness', value: '95%', benchmark: '86%', status: 'excellent' },
    { metric: 'Customer Satisfaction', value: '4.7/5', benchmark: '4.1/5', status: 'excellent' },
    { metric: 'Net Promoter Score', value: '74', benchmark: '52', status: 'excellent' },
    { metric: 'Brand Loyalty', value: '80%', benchmark: '67%', status: 'excellent' },
    { metric: 'Purchase Intent', value: '70%', benchmark: '57%', status: 'excellent' },
    { metric: 'Brand Trust', value: '91%', benchmark: '77%', status: 'excellent' }
  ];

  return (
    <div className="space-y-6">
      {/* Market KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {marketKPIs.map((kpi, index) => (
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

      {/* Market Share & Export Revenue Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Market Share by Segment</h3>
          <Chart 
            type="bar" 
            data={marketShareData} 
            dataKey="amul" 
            xAxisKey="segment"
            height={300}
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Export Revenue by Country</h3>
          <Chart 
            type="pie" 
            data={exportData} 
            dataKey="revenue"
            height={300}
          />
        </div>
      </div>

      {/* Competitor Analysis Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Competitive Landscape</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Competitor</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Market Share</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Revenue</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Growth</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Position</th>
              </tr>
            </thead>
            <tbody>
              {competitorAnalysis.map((competitor, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-900">{competitor.competitor}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{competitor.marketShare}%</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{competitor.revenue}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {competitor.growth}
                    </span>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-400'}`}
                        style={{width: `${competitor.marketShare * 2}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Brand Performance Visuals */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Brand Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandMetrics.map((metric, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{metric.metric}</h4>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Excellent
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-medium">{metric.value}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Benchmark:</span>
                  <span className="font-medium">{metric.benchmark}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Export Market Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Country</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue (₹ Cr)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Growth (%)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Key Products</th>
              </tr>
            </thead>
            <tbody>
              {exportData.map((country, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{country.country}</td>
                  <td className="py-3 px-4 text-gray-700">₹{country.revenue}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      +{country.growth}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{country.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;