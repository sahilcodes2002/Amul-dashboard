import React from 'react';
import Chart from '../components/Chart';
import MetricCard from '../components/MetricCard';
import { DollarSign, TrendingUp, PieChart, BarChart3 } from 'lucide-react';
import RegionalRevenueMap from '../components/RegionalRevenueMap';

const FinancialPerformance = () => {
  // Updated KPIs based on real-world data
  const financialKPIs = [
    {
      title: 'Total Revenue',
      value: '₹3,100 Cr',
      change: '+13.2%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Net Profit',
      value: '₹370 Cr',
      change: '+19.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'EBITDA',
      value: '₹480 Cr',
      change: '+16.4%',
      trend: 'up' as const,
      icon: BarChart3,
      color: 'bg-purple-500'
    },
    {
      title: 'Export Revenue',
      value: '₹2,950 Cr',
      change: '+25.3%',
      trend: 'up' as const,
      icon: PieChart,
      color: 'bg-orange-500'
    }
  ];

  // Updated revenue data
  const revenueData = [
    { month: 'Jan', revenue: 720, profit: 88, exports: 250 },
    { month: 'Feb', revenue: 765, profit: 94, exports: 265 },
    { month: 'Mar', revenue: 830, profit: 102, exports: 285 },
    { month: 'Apr', revenue: 880, profit: 110, exports: 310 },
    { month: 'May', revenue: 930, profit: 117, exports: 335 },
    { month: 'Jun', revenue: 950, profit: 125, exports: 350 }
  ];

  // Updated segment data
  const segmentData = [
    { name: 'Liquid Milk', value: 1300, percentage: 42 },
    { name: 'Milk Products', value: 900, percentage: 29 },
    { name: 'Ice Cream', value: 450, percentage: 15 },
    { name: 'Cheese & Butter', value: 300, percentage: 10 },
    { name: 'Other', value: 100, percentage: 4 }
  ];

  // Updated regional revenue
  const regionalRevenue = [
    { region: 'Gujarat', revenue: 1300, growth: 15.1 },
    { region: 'Maharashtra', revenue: 470, growth: 10.2 },
    { region: 'Delhi NCR', revenue: 400, growth: 17.0 },
    { region: 'Rajasthan', revenue: 310, growth: 12.3 },
    { region: 'Karnataka', revenue: 250, growth: 8.5 },
    { region: 'Tamil Nadu', revenue: 240, growth: 14.0 }
  ];

  return (
    <div className="space-y-6">
      {/* Financial KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {financialKPIs.map((kpi, index) => (
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

      {/* Revenue & Segment Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Revenue & Profit Trend</h3>
          <Chart 
            type="line" 
            data={revenueData} 
            dataKey="revenue" 
            xAxisKey="month"
            height={300}
            yAxisLabel="₹ Cr"
            tooltipFormatter={(value: number) => `₹${value} Cr`}
          />
          <div className="text-xs text-gray-500 mt-2">* All values in crores (₹ Cr)</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Revenue by Segment</h3>
          <Chart 
            type="pie" 
            data={segmentData} 
            dataKey="value"
            height={300}
          />
        </div>
      </div>

      {/* Regional Revenue Map */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 md:p-4 mt-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 md:mb-3">Regional Revenue Performance</h3>
        <RegionalRevenueMap data={regionalRevenue} />
      </div>

      {/* Financial Ratios Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Profitability Ratios</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Gross Margin</span>
              <span className="font-semibold">25.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Net Margin</span>
              <span className="font-semibold">12.7%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">EBITDA Margin</span>
              <span className="font-semibold">16.8%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Efficiency Ratios</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Asset Turnover</span>
              <span className="font-semibold">1.9x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Inventory Turnover</span>
              <span className="font-semibold">12.8x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Receivables Turnover</span>
              <span className="font-semibold">9.1x</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Growth Metrics</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Revenue Growth</span>
              <span className="font-semibold text-green-600">+13.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Profit Growth</span>
              <span className="font-semibold text-green-600">+19.1%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Export Growth</span>
              <span className="font-semibold text-green-600">+25.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPerformance;