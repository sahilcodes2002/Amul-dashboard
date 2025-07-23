import React from 'react';
import MetricCard from '../components/MetricCard';
import Chart from '../components/Chart';
import { Leaf, Droplets, Zap, Recycle } from 'lucide-react';

const SustainabilityReports = () => {
  const sustainabilityKPIs = [
    {
      title: 'Carbon Footprint',
      value: '2.1 kg CO₂/L',
      change: '-8.5%',
      trend: 'up' as const,
      icon: Leaf,
      color: 'bg-green-500'
    },
    {
      title: 'Water Usage',
      value: '1.8 L/L milk',
      change: '-12.3%',
      trend: 'up' as const,
      icon: Droplets,
      color: 'bg-blue-500'
    },
    {
      title: 'Renewable Energy',
      value: '45.2%',
      change: '+15.7%',
      trend: 'up' as const,
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      title: 'Waste Recycling',
      value: '87.4%',
      change: '+6.8%',
      trend: 'up' as const,
      icon: Recycle,
      color: 'bg-purple-500'
    }
  ];

  const carbonEmissions = [
    { month: 'Jan', emissions: 2.45, target: 2.40 },
    { month: 'Feb', emissions: 2.38, target: 2.35 },
    { month: 'Mar', emissions: 2.32, target: 2.30 },
    { month: 'Apr', emissions: 2.25, target: 2.25 },
    { month: 'May', emissions: 2.18, target: 2.20 },
    { month: 'Jun', emissions: 2.10, target: 2.15 }
  ];

  const renewableEnergy = [
    { source: 'Solar', capacity: '125 MW', contribution: 35, investment: '₹450 Cr' },
    { source: 'Biogas', capacity: '45 MW', contribution: 28, investment: '₹180 Cr' },
    { source: 'Wind', capacity: '35 MW', contribution: 22, investment: '₹220 Cr' },
    { source: 'Hydro', capacity: '15 MW', contribution: 15, investment: '₹95 Cr' }
  ];

  const wasteManagement = [
    { category: 'Organic Waste', generated: 1250, recycled: 1125, rate: 90 },
    { category: 'Packaging Waste', generated: 850, recycled: 765, rate: 90 },
    { category: 'Water Treatment', generated: 2100, recycled: 1890, rate: 90 },
    { category: 'Plastic Waste', generated: 320, recycled: 272, rate: 85 },
    { category: 'Paper Waste', generated: 180, recycled: 162, rate: 90 }
  ];

  const environmentalInitiatives = [
    {
      initiative: 'Solar Power Expansion',
      status: 'In Progress',
      completion: 75,
      impact: 'Reduce CO₂ by 15,000 tons/year',
      investment: '₹450 Cr'
    },
    {
      initiative: 'Water Conservation',
      status: 'Completed',
      completion: 100,
      impact: 'Save 2.5 million liters/day',
      investment: '₹120 Cr'
    },
    {
      initiative: 'Packaging Optimization',
      status: 'In Progress',
      completion: 60,
      impact: 'Reduce plastic by 30%',
      investment: '₹85 Cr'
    },
    {
      initiative: 'Biogas Plants',
      status: 'Planning',
      completion: 25,
      impact: 'Generate 45 MW clean energy',
      investment: '₹180 Cr'
    }
  ];

  const socialImpact = [
    { metric: 'Farmer Welfare Programs', value: '3.6M farmers', impact: '₹61,000 Cr paid' },
    { metric: 'Rural Employment', value: '2.8M jobs', impact: 'Direct & indirect employment' },
    { metric: 'Women Empowerment', value: '45% participation', impact: 'Leadership roles' },
    { metric: 'Education Support', value: '1,200 schools', impact: 'Rural education programs' },
    { metric: 'Healthcare Access', value: '850 centers', impact: 'Primary healthcare' },
    { metric: 'Skill Development', value: '125K trained', impact: 'Technical skills' }
  ];

  return (
    <div className="space-y-6">
      {/* Sustainability KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {sustainabilityKPIs.map((kpi, index) => (
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

      {/* Environmental Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Carbon Emissions Trend</h3>
          <Chart 
            type="line" 
            data={carbonEmissions} 
            dataKey="emissions" 
            xAxisKey="month"
            height={300}
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Renewable Energy Mix</h3>
          <Chart 
            type="pie" 
            data={renewableEnergy} 
            dataKey="contribution"
            height={300}
          />
        </div>
      </div>

      {/* Waste Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Waste Management Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Waste Category</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Generated (MT)</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Recycled (MT)</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Recycling Rate</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              {wasteManagement.map((waste, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-900">{waste.category}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{waste.generated.toLocaleString()}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{waste.recycled.toLocaleString()}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      waste.rate >= 90 ? 'bg-green-100 text-green-800' :
                      waste.rate >= 80 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {waste.rate}%
                    </span>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          waste.rate >= 90 ? 'bg-green-600' :
                          waste.rate >= 80 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{width: `${waste.rate}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Environmental Initiatives */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Environmental Initiatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {environmentalInitiatives.map((initiative, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow border border-gray-100 min-w-0">
              <div className="relative mb-1">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="#f3f4f6" />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke={
                      initiative.status === 'Completed' ? '#22c55e' :
                      initiative.status === 'In Progress' ? '#3b82f6' : '#facc15'
                    }
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 20}
                    strokeDashoffset={2 * Math.PI * 20 * (1 - initiative.completion / 100)}
                    strokeLinecap="round"
                  />
                  <text x="50%" y="54%" textAnchor="middle" dy="0.3em" fontSize="0.8em" fill="#111827" fontWeight="bold">
                    {initiative.completion}%
                  </text>
                </svg>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-0.5 text-center break-words leading-tight w-full">{initiative.initiative}</div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`inline-block w-2 h-2 rounded-full ${
                  initiative.status === 'Completed' ? 'bg-green-500' :
                  initiative.status === 'In Progress' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`}></span>
                <span className={`text-xs font-bold ${
                  initiative.status === 'Completed' ? 'text-green-600' :
                  initiative.status === 'In Progress' ? 'text-blue-600' :
                  'text-yellow-600'
                }`}>{initiative.status}</span>
              </div>
              <div className="text-xs text-green-700 font-medium text-center mb-0.5 break-words leading-tight w-full">{initiative.impact}</div>
              <div className="text-xs text-blue-700 font-medium text-center break-words leading-tight w-full">{initiative.investment}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Impact */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Social Impact Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {socialImpact.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow border border-gray-100 min-w-0">
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mb-1">
                <span className="text-base font-bold text-green-700">{metric.value[0]}</span>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-0.5 text-center break-words leading-tight w-full">{metric.value}</div>
              <div className="text-xs text-gray-500 text-center break-words leading-tight w-full">{metric.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityReports;