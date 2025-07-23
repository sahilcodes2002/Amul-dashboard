import React, { useState, useRef } from 'react';
// @ts-ignore
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import indiaGeo from '../india-states.json';

interface RegionalRevenue {
  region: string;
  revenue: number;
  growth: number;
}

interface RegionalRevenueMapProps {
  data: RegionalRevenue[];
}

const getColor = (revenue: number, max: number) => {
  const percent = revenue / max;
  if (percent > 0.8) return '#2563eb';
  if (percent > 0.6) return '#38bdf8';
  if (percent > 0.4) return '#a5b4fc';
  if (percent > 0.2) return '#fbbf24';
  return '#fca5a5';
};

const REGION_MAP: Record<string, string> = {
  'Gujarat': 'Gujarat',
  'Maharashtra': 'Maharashtra',
  'Delhi NCR': 'Delhi',
  'Rajasthan': 'Rajasthan',
  'Karnataka': 'Karnataka',
  'Tamil Nadu': 'Tamil Nadu',
};

const RegionalRevenueMap: React.FC<RegionalRevenueMapProps> = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string; revenue: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const revenueByRegion = Object.fromEntries(data.map(d => [REGION_MAP[d.region] || d.region, d.revenue]));

  return (
    <div className="w-full flex flex-col items-center">
      <div ref={containerRef} className="w-full max-w-2xl min-h-[400px] flex flex-row items-center justify-center relative overflow-x-auto" style={{ maxWidth: '100%' }}>
        <div className="flex-shrink-0">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 z-10">
              <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            </div>
          )}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 650, center: [82.8, 22] }}
            width={500}
            height={400}
            style={{ width: 500, height: 400, maxWidth: '100%' }}
          >
            <Geographies geography={indiaGeo}>
              {({ geographies }: { geographies: any[] }) => {
                if (loading) setTimeout(() => setLoading(false), 100);
                return geographies.map((geo: any) => {
                  const regionName = geo.properties.name || geo.properties.st_nm;
                  const revenue = revenueByRegion[regionName] || 0;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={revenue ? getColor(revenue, maxRevenue) : '#e5e7eb'}
                      stroke="#fff"
                      style={{ outline: 'none', cursor: 'pointer' }}
                      onMouseEnter={(e: React.MouseEvent<SVGPathElement>) => {
                        const container = containerRef.current;
                        if (container) {
                          const bounds = container.getBoundingClientRect();
                          setTooltip({
                            x: e.clientX - bounds.left,
                            y: e.clientY - bounds.top,
                            name: regionName,
                            revenue,
                          });
                        }
                      }}
                      onMouseMove={(e: React.MouseEvent<SVGPathElement>) => {
                        const container = containerRef.current;
                        if (container) {
                          const bounds = container.getBoundingClientRect();
                          setTooltip(t => t ? { ...t, x: e.clientX - bounds.left, y: e.clientY - bounds.top } : null);
                        }
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                });
              }}
            </Geographies>
          </ComposableMap>
          {tooltip && (
            <div
              className="pointer-events-none absolute z-20 px-3 py-2 rounded bg-white border border-gray-300 shadow text-xs text-gray-900"
              style={{ left: tooltip.x + 10, top: tooltip.y - 10, minWidth: 120 }}
            >
              <div className="font-semibold">{tooltip.name}</div>
              <div>Revenue: <span className="font-bold">₹{tooltip.revenue} Cr</span></div>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-wrap gap-2 ml-4">
          {data.map(region => (
            <div key={region.region} className="flex items-center gap-2 text-xs bg-gray-100 rounded px-2 py-1">
              <span className="inline-block w-3 h-3 rounded" style={{ background: getColor(region.revenue, maxRevenue) }}></span>
              <span className="font-semibold text-gray-700">{region.region}</span>
              <span className="text-gray-500">₹{region.revenue} Cr</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-2">* Map colors indicate relative revenue by region</div>
    </div>
  );
};

export default RegionalRevenueMap; 