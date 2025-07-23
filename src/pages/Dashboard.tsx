import React from 'react';
import MetricCard from '../components/MetricCard';
import Chart from '../components/Chart';
import { 
  DollarSign, 
  Package, 
  Users, 
  Target,
  TrendingUp,
  AlertCircle,
  Award,
  Building2,
  Globe2,
  UserCheck,
  CreditCard
} from 'lucide-react';

const Dashboard = () => {
  // Updated KPIs based on real-world data
  const kpiData = [
    // {
    //   title: 'Total Revenue',
    //   value: '₹3,100 Cr',
    //   change: '+13.2%',
    //   trend: 'up' as const,
    //   icon: DollarSign,
    //   color: 'bg-green-500'
    // },
    {
      title: 'Milk Procurement',
      value: '25.2 MLPD',
      change: '+8.7%',
      trend: 'up' as const,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Members',
      value: '3.8M+',
      change: '+5.8%',
      trend: 'up' as const,
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Market Share',
      value: '28.7%',
      change: '+2.3%',
      trend: 'up' as const,
      icon: Target,
      color: 'bg-orange-500'
    }
  ];

  // Updated revenue data
  const revenueData = [
    { month: 'Jan', revenue: 720, target: 700 },
    { month: 'Feb', revenue: 765, target: 730 },
    { month: 'Mar', revenue: 830, target: 770 },
    { month: 'Apr', revenue: 880, target: 820 },
    { month: 'May', revenue: 930, target: 860 },
    { month: 'Jun', revenue: 950, target: 880 }
  ];

  // Updated production data
  const productionData = [
    { name: 'Liquid Milk', value: 76, volume: '19.2 MLPD' },
    { name: 'Milk Powder', value: 14, volume: '2.3 MT' },
    { name: 'Butter', value: 7, volume: '910 MT' },
    { name: 'Cheese', value: 3, volume: '162 MT' }
  ];

  // Updated alerts
  const alerts = [
    {
      type: 'warning',
      title: 'Summer Demand Planning',
      message: 'Increase production capacity by 18% for peak season',
      priority: 'high'
    },
    {
      type: 'info',
      title: 'E-commerce Growth',
      message: 'Digital sales growing 162% - scale fulfillment',
      priority: 'medium'
    },
    {
      type: 'success',
      title: 'Quality Achievement',
      message: 'All quality metrics exceeded targets this month',
      priority: 'low'
    }
  ];

  // Quick stats for ribbon
  const quickStats = [
    {
      label: 'Brand Value',
      value: '₹70,000 Cr',
      icon: Award,
      color: 'bg-green-100 text-green-700'
    },
    {
      label: 'Export Revenue',
      value: '₹2,950 Cr',
      icon: Globe2,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      label: 'Farmer Payments',
      value: '₹62,000 Cr',
      icon: CreditCard,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      label: 'Processing Plants',
      value: '91',
      icon: Building2,
      color: 'bg-gray-100 text-gray-700'
    },
    {
      label: 'Village Societies',
      value: '19,200+',
      icon: UserCheck,
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-full justify-center items-stretch">
        {kpiData.map((kpi, index) => (
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

      {/* Quick Stats Ribbon - seamless infinite animation */}
      <div className="w-full max-w-full overflow-x-hidden py-2 relative">
        <div className="flex items-center space-x-4 md:space-x-6 animate-marquee-2 whitespace-nowrap min-w-0 w-max" style={{ willChange: 'transform' }}>
          {Array(2).fill(quickStats).flat().map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center min-w-[160px] max-w-xs px-3 py-2 md:px-4 md:py-3 rounded-lg shadow bg-white border border-gray-200 mx-1 md:mx-2 ${stat.color}`}
              style={{ flex: '0 0 auto' }}
            >
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              <div className="min-w-0">
                <div className="font-bold text-base md:text-lg leading-tight truncate">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide truncate">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee-2 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-2 {
            animation: marquee-2 30s linear infinite;
            display: flex;
          }
        `}</style>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full max-w-full">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto w-full max-w-full">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <Chart 
            type="area" 
            data={revenueData} 
            dataKey="revenue" 
            xAxisKey="month"
            height={250}
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto w-full max-w-full">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Production Mix</h3>
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          <Chart 
            type="pie" 
            data={productionData} 
            dataKey="value"
            height={250}
          />
        </div>
      </div>

      {/* Alerts */}
      {/* <div className="w-full max-w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
          Priority Alerts
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          {alerts.map((alert, index) => {
            let color, icon, badge;
            if (alert.priority === 'high') {
              color = 'bg-red-50 border-red-400';
              icon = <AlertCircle className="w-5 h-5 text-red-500 mr-2" />;
              badge = <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2">HIGH</span>;
            } else if (alert.priority === 'medium') {
              color = 'bg-yellow-50 border-yellow-400';
              icon = <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />;
              badge = <span className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2">MEDIUM</span>;
            } else {
              color = 'bg-green-50 border-green-400';
              icon = <AlertCircle className="w-5 h-5 text-green-500 mr-2" />;
              badge = <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2">LOW</span>;
            }
            return (
              <div
                key={index}
                className={`flex-1 min-w-0 flex items-start border-l-4 ${color} rounded-lg p-3 md:p-4 shadow-sm`}
              >
                {icon}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-gray-900 text-sm truncate">{alert.title}</span>
                    {badge}
                  </div>
                  <span className="text-xs text-gray-700 truncate block">{alert.message}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;