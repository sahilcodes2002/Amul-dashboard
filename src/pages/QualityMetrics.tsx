import React from 'react';
import MetricCard from '../components/MetricCard';
import { Award, CheckCircle, AlertTriangle, Target } from 'lucide-react';

const QualityMetrics = () => {
  const qualityKPIs = [
    {
      title: 'Overall Quality Score',
      value: '98.7%',
      change: '+2.1%',
      trend: 'up' as const,
      icon: Award,
      color: 'bg-green-500'
    },
    {
      title: 'Tests Passed',
      value: '99.2%',
      change: '+0.8%',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'bg-blue-500'
    },
    {
      title: 'Compliance Rate',
      value: '100%',
      change: '0%',
      trend: 'up' as const,
      icon: Target,
      color: 'bg-purple-500'
    },
    {
      title: 'Quality Incidents',
      value: '2',
      change: '-67%',
      trend: 'up' as const,
      icon: AlertTriangle,
      color: 'bg-orange-500'
    }
  ];

  const qualityMetrics = [
    { metric: 'Fat Content', target: '3.5%', actual: '3.6%', status: 'good', variance: '+0.1%' },
    { metric: 'SNF Content', target: '8.5%', actual: '8.7%', status: 'good', variance: '+0.2%' },
    { metric: 'Bacteria Count', target: '<1L', actual: '0.8L', status: 'good', variance: '-20%' },
    { metric: 'Somatic Cells', target: '<4L', actual: '3.2L', status: 'good', variance: '-20%' },
    { metric: 'Temperature', target: '4°C', actual: '3.8°C', status: 'good', variance: '-0.2°C' },
    { metric: 'pH Level', target: '6.6-6.8', actual: '6.7', status: 'good', variance: 'Within range' }
  ];

  const testResults = [
    { test: 'Microbiological', samples: 1250, passed: 1242, rate: 99.4 },
    { test: 'Chemical Analysis', samples: 980, passed: 975, rate: 99.5 },
    { test: 'Physical Properties', samples: 1100, passed: 1095, rate: 99.5 },
    { test: 'Nutritional Content', samples: 850, passed: 845, rate: 99.4 },
    { test: 'Adulterant Detection', samples: 1200, passed: 1200, rate: 100 }
  ];

  const certifications = [
    { name: 'ISO 22000', status: 'Active', expiry: '2025-12-31', plants: 89 },
    { name: 'HACCP', status: 'Active', expiry: '2025-08-15', plants: 89 },
    { name: 'FSSAI', status: 'Active', expiry: '2025-06-30', plants: 89 },
    { name: 'Organic Certification', status: 'Active', expiry: '2025-10-20', plants: 12 }
  ];

  return (
    <div className="space-y-6">
      {/* Quality KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
        {qualityKPIs.map((kpi, index) => (
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

      {/* Quality Parameters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Quality Parameters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="p-3 md:p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{metric.metric}</h4>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Target:</span>
                  <span className="font-medium">{metric.target}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Actual:</span>
                  <span className="font-medium">{metric.actual}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600">Variance:</span>
                  <span className="font-medium text-green-600">{metric.variance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Results */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Laboratory Test Results</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Test Type</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Samples</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Passed</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Pass Rate</th>
                <th className="text-left py-2 px-2 md:py-3 md:px-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((test, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium text-gray-900">{test.test}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{test.samples.toLocaleString()}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-gray-700">{test.passed.toLocaleString()}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      test.rate >= 99.5 ? 'bg-green-100 text-green-800' :
                      test.rate >= 99 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {test.rate}%
                    </span>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          test.rate >= 99.5 ? 'bg-green-600' :
                          test.rate >= 99 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{width: `${test.rate}%`}}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Quality Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="p-3 md:p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {cert.status}
                </span>
              </div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Expiry Date:</span>
                  <span className="font-medium">{cert.expiry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certified Plants:</span>
                  <span className="font-medium">{cert.plants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityMetrics;