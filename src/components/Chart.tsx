import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ChartProps {
  type: 'line' | 'area' | 'bar' | 'pie';
  data: any[];
  dataKey?: string;
  xAxisKey?: string;
  colors?: string[];
  height?: number;
  yAxisLabel?: string;
  tooltipFormatter?: (value: any) => string;
}

// Helper to guess label key for pie chart
const getPieLabelKey = (data: any[]): string => {
  if (!data || data.length === 0) return 'name';
  if ('country' in data[0]) return 'country';
  if ('source' in data[0]) return 'source';
  if ('name' in data[0]) return 'name';
  return Object.keys(data[0])[0] || 'name';
};

const Chart: React.FC<ChartProps> = ({ 
  type, 
  data, 
  dataKey = 'value', 
  xAxisKey = 'name',
  colors = ['#1e40af', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  height = 300,
  yAxisLabel,
  tooltipFormatter
}) => {
  const pieLabelKey: string = type === 'pie' ? getPieLabelKey(data) : 'name';

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 10 } : undefined} />
            <Tooltip formatter={tooltipFormatter ? (value) => [tooltipFormatter(value)] : undefined} />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke={colors[0]} strokeWidth={2} />
          </LineChart>
        );
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 10 } : undefined} />
            <Tooltip formatter={tooltipFormatter ? (value) => [tooltipFormatter(value)] : undefined} />
            <Legend />
            <Area type="monotone" dataKey={dataKey} stroke={colors[0]} fill={colors[0]} fillOpacity={0.6} />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft', offset: 10 } : undefined} />
            <Tooltip formatter={tooltipFormatter ? (value) => [tooltipFormatter(value)] : undefined} />
            <Legend />
            <Bar dataKey={dataKey} fill={colors[0]} />
          </BarChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ percent = 0, ...rest }) => {
                const label = rest[pieLabelKey] || 'Unknown';
                return `${label} ${(percent * 100).toFixed(0)}%`;
              }}
              outerRadius={120}
              fill="#8884d8"
              dataKey={dataKey}
              nameKey={pieLabelKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: any, _name: any, props: any) => [value, props?.payload?.[pieLabelKey] || 'Unknown']} />
          </PieChart>
        );
      default:
        // Always return a valid React element
        return <div />;
    }
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      {renderChart()}
    </ResponsiveContainer>
  );
};

export default Chart;