import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Area, AreaChart } from 'recharts';
import { Activity, Router, Cpu, HardDrive, Network, AlertTriangle, CheckCircle, XCircle, Clock, Users, TrendingUp, TrendingDown, Zap, Download, Video, Wifi, UserPlus, History, ChevronRight } from 'lucide-react';

// Extended sample data with more dates for time range testing
const routerData = [
  {
    "_id": "router_askey_6e_001",
    "router": {
      "mac": "9cde4cde",
      "serial_number": "SBE1V1K",
      "model": "Askey Wifi 6E",
      "firmware_version": "v3.2.1",
      "location": "lab_01"
    },
    "features": [
      {
        "feature_name": "google_ping",
        "client_tests": [
          {
            "client_count": 5,
            "runs": [
              {
                "run_id": "run_001",
                "timestamp": "2024-08-10T06:20:00Z",
                "status": "pass",
                "client_creation_time_seconds": 45,
                "cpu_utilization": {
                  "router": [42, 48, 52, 45, 40, 38],
                  "machine": [30, 35, 40, 38, 32, 28]
                },
                "metrics": {
                  "packet_loss_percent": 0.2,
                  "rtt_ms": 15,
                  "avg_latency_ms": 14,
                  "min_latency_ms": 12,
                  "max_latency_ms": 18,
                  "throughput_mbps": 850,
                  "jitter_percent": 1.2
                }
              },
              {
                "run_id": "run_002",
                "timestamp": "2024-12-15T10:30:00Z",
                "status": "pass",
                "client_creation_time_seconds": 43,
                "cpu_utilization": {
                  "router": [40, 45, 50, 48, 42, 39],
                  "machine": [28, 32, 38, 36, 30, 26]
                },
                "metrics": {
                  "packet_loss_percent": 0.1,
                  "rtt_ms": 14,
                  "avg_latency_ms": 13,
                  "min_latency_ms": 11,
                  "max_latency_ms": 16,
                  "throughput_mbps": 870,
                  "jitter_percent": 0.9
                }
              },
              {
                "run_id": "run_003",
                "timestamp": "2025-01-20T14:15:00Z",
                "status": "pass",
                "client_creation_time_seconds": 46,
                "cpu_utilization": {
                  "router": [44, 49, 53, 47, 43, 41],
                  "machine": [31, 36, 41, 39, 33, 29]
                },
                "metrics": {
                  "packet_loss_percent": 0.3,
                  "rtt_ms": 16,
                  "avg_latency_ms": 15,
                  "min_latency_ms": 13,
                  "max_latency_ms": 19,
                  "throughput_mbps": 840,
                  "jitter_percent": 1.5
                }
              },
              {
                "run_id": "run_004",
                "timestamp": "2025-02-05T08:45:00Z",
                "status": "pass",
                "client_creation_time_seconds": 44,
                "cpu_utilization": {
                  "router": [41, 46, 51, 46, 41, 38],
                  "machine": [29, 33, 39, 37, 31, 27]
                },
                "metrics": {
                  "packet_loss_percent": 0.2,
                  "rtt_ms": 15,
                  "avg_latency_ms": 14,
                  "min_latency_ms": 12,
                  "max_latency_ms": 17,
                  "throughput_mbps": 860,
                  "jitter_percent": 1.1
                }
              },
              {
                "run_id": "run_005",
                "timestamp": "2025-02-08T12:00:00Z",
                "status": "pass",
                "client_creation_time_seconds": 45,
                "cpu_utilization": {
                  "router": [43, 48, 52, 47, 42, 40],
                  "machine": [30, 34, 40, 38, 32, 28]
                },
                "metrics": {
                  "packet_loss_percent": 0.2,
                  "rtt_ms": 15,
                  "avg_latency_ms": 14,
                  "min_latency_ms": 12,
                  "max_latency_ms": 18,
                  "throughput_mbps": 855,
                  "jitter_percent": 1.3
                }
              },
              {
                "run_id": "run_006",
                "timestamp": "2025-02-09T15:30:00Z",
                "status": "pass",
                "client_creation_time_seconds": 42,
                "cpu_utilization": {
                  "router": [39, 44, 49, 45, 40, 37],
                  "machine": [27, 31, 37, 35, 29, 25]
                },
                "metrics": {
                  "packet_loss_percent": 0.1,
                  "rtt_ms": 13,
                  "avg_latency_ms": 12,
                  "min_latency_ms": 11,
                  "max_latency_ms": 15,
                  "throughput_mbps": 880,
                  "jitter_percent": 0.8
                }
              },
              {
                "run_id": "run_007",
                "timestamp": "2025-02-11T09:20:00Z",
                "status": "pass",
                "client_creation_time_seconds": 47,
                "cpu_utilization": {
                  "router": [45, 50, 54, 48, 44, 42],
                  "machine": [32, 37, 42, 40, 34, 30]
                },
                "metrics": {
                  "packet_loss_percent": 0.3,
                  "rtt_ms": 17,
                  "avg_latency_ms": 16,
                  "min_latency_ms": 14,
                  "max_latency_ms": 20,
                  "throughput_mbps": 830,
                  "jitter_percent": 1.6
                }
              },
              {
                "run_id": "run_008",
                "timestamp": "2025-02-12T18:45:00Z",
                "status": "pass",
                "client_creation_time_seconds": 44,
                "cpu_utilization": {
                  "router": [42, 47, 51, 46, 41, 39],
                  "machine": [29, 34, 39, 37, 31, 27]
                },
                "metrics": {
                  "packet_loss_percent": 0.2,
                  "rtt_ms": 14,
                  "avg_latency_ms": 13,
                  "min_latency_ms": 12,
                  "max_latency_ms": 16,
                  "throughput_mbps": 865,
                  "jitter_percent": 1.0
                }
              }
            ]
          },
          {
            "client_count": 50,
            "runs": [
              {
                "run_id": "run_101",
                "timestamp": "2024-09-15T07:20:00Z",
                "status": "fail",
                "client_creation_time_seconds": 420,
                "cpu_utilization": {
                  "router": [65, 72, 78, 85, 92, 88],
                  "machine": [55, 62, 68, 75, 80, 76]
                },
                "metrics": {
                  "packet_loss_percent": 15.5,
                  "rtt_ms": 85,
                  "avg_latency_ms": 82,
                  "min_latency_ms": 45,
                  "max_latency_ms": 150,
                  "throughput_mbps": 420,
                  "jitter_percent": 18.2
                },
                "error": {
                  "code": "HIGH_PACKET_LOSS",
                  "message": "Packet loss exceeded 10% threshold"
                }
              },
              {
                "run_id": "run_102",
                "timestamp": "2025-01-10T11:30:00Z",
                "status": "partial",
                "client_creation_time_seconds": 390,
                "cpu_utilization": {
                  "router": [62, 68, 75, 80, 87, 82],
                  "machine": [52, 58, 65, 70, 76, 72]
                },
                "metrics": {
                  "packet_loss_percent": 8.2,
                  "rtt_ms": 65,
                  "avg_latency_ms": 62,
                  "min_latency_ms": 35,
                  "max_latency_ms": 120,
                  "throughput_mbps": 520,
                  "jitter_percent": 12.5
                },
                "error": {
                  "code": "DEGRADED_PERFORMANCE",
                  "message": "Performance below optimal levels"
                }
              },
              {
                "run_id": "run_103",
                "timestamp": "2025-02-08T15:15:00Z",
                "status": "fail",
                "client_creation_time_seconds": 435,
                "cpu_utilization": {
                  "router": [68, 74, 80, 88, 95, 91],
                  "machine": [58, 64, 70, 78, 83, 79]
                },
                "metrics": {
                  "packet_loss_percent": 18.7,
                  "rtt_ms": 95,
                  "avg_latency_ms": 92,
                  "min_latency_ms": 50,
                  "max_latency_ms": 180,
                  "throughput_mbps": 380,
                  "jitter_percent": 22.1
                },
                "error": {
                  "code": "CRITICAL_FAILURE",
                  "message": "Multiple thresholds exceeded"
                }
              },
              {
                "run_id": "run_104",
                "timestamp": "2025-02-10T09:45:00Z",
                "status": "partial",
                "client_creation_time_seconds": 405,
                "cpu_utilization": {
                  "router": [64, 70, 76, 82, 89, 84],
                  "machine": [54, 60, 66, 72, 78, 74]
                },
                "metrics": {
                  "packet_loss_percent": 10.3,
                  "rtt_ms": 72,
                  "avg_latency_ms": 68,
                  "min_latency_ms": 38,
                  "max_latency_ms": 135,
                  "throughput_mbps": 485,
                  "jitter_percent": 14.8
                },
                "error": {
                  "code": "MODERATE_ISSUES",
                  "message": "Some performance degradation detected"
                }
              },
              {
                "run_id": "run_105",
                "timestamp": "2025-02-12T13:00:00Z",
                "status": "fail",
                "client_creation_time_seconds": 445,
                "cpu_utilization": {
                  "router": [70, 76, 82, 90, 97, 93],
                  "machine": [60, 66, 72, 80, 85, 81]
                },
                "metrics": {
                  "packet_loss_percent": 20.5,
                  "rtt_ms": 105,
                  "avg_latency_ms": 98,
                  "min_latency_ms": 55,
                  "max_latency_ms": 200,
                  "throughput_mbps": 350,
                  "jitter_percent": 25.3
                },
                "error": {
                  "code": "SEVERE_FAILURE",
                  "message": "Critical performance issues"
                }
              }
            ]
          },
          {
            "client_count": 10,
            "runs": [
              {
                "run_id": "run_201",
                "timestamp": "2025-02-11T10:00:00Z",
                "status": "pass",
                "client_creation_time_seconds": 85,
                "cpu_utilization": {
                  "router": [48, 52, 56, 53, 49, 46],
                  "machine": [38, 42, 46, 44, 40, 36]
                },
                "metrics": {
                  "packet_loss_percent": 0.4,
                  "rtt_ms": 18,
                  "avg_latency_ms": 17,
                  "min_latency_ms": 15,
                  "max_latency_ms": 22,
                  "throughput_mbps": 820,
                  "jitter_percent": 1.8
                }
              }
            ]
          }
        ]
      },
      {
        "feature_name": "parallel_download",
        "client_tests": [
          {
            "client_count": 10,
            "runs": [
              {
                "run_id": "run_301",
                "timestamp": "2025-02-10T10:00:00Z",
                "status": "pass",
                "client_creation_time_seconds": 95,
                "cpu_utilization": {
                  "router": [50, 55, 60, 58, 52, 48],
                  "machine": [40, 45, 50, 48, 42, 38]
                },
                "metrics": {
                  "time_taken_seconds": 145,
                  "resolution": "1080p",
                  "avg_speed_mbps": 750,
                  "peak_speed_mbps": 920
                }
              },
              {
                "run_id": "run_302",
                "timestamp": "2025-02-12T14:30:00Z",
                "status": "pass",
                "client_creation_time_seconds": 92,
                "cpu_utilization": {
                  "router": [48, 53, 58, 56, 50, 46],
                  "machine": [38, 43, 48, 46, 40, 36]
                },
                "metrics": {
                  "time_taken_seconds": 138,
                  "resolution": "1080p",
                  "avg_speed_mbps": 780,
                  "peak_speed_mbps": 950
                }
              }
            ]
          }
        ]
      },
      {
        "feature_name": "video_streaming",
        "client_tests": [
          {
            "client_count": 20,
            "runs": [
              {
                "run_id": "run_401",
                "timestamp": "2025-02-11T11:00:00Z",
                "status": "pass",
                "client_creation_time_seconds": 180,
                "cpu_utilization": {
                  "router": [55, 60, 65, 62, 58, 54],
                  "machine": [45, 50, 55, 52, 48, 44]
                },
                "metrics": {
                  "buffering_events": 2,
                  "avg_bitrate_mbps": 25,
                  "resolution": "4K",
                  "dropped_frames": 15
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "_id": "router_askey_wifi_002",
    "router": {
      "mac": "678djid83",
      "serial_number": "CBE131K",
      "model": "Askey Wifi",
      "firmware_version": "v2.8.4",
      "location": "lab_02"
    },
    "features": [
      {
        "feature_name": "google_ping",
        "client_tests": [
          {
            "client_count": 5,
            "runs": [
              {
                "run_id": "run_501",
                "timestamp": "2025-02-12T07:00:00Z",
                "status": "pass",
                "client_creation_time_seconds": 48,
                "cpu_utilization": {
                  "router": [38, 42, 46, 43, 39, 36],
                  "machine": [28, 32, 36, 34, 30, 26]
                },
                "metrics": {
                  "packet_loss_percent": 0.1,
                  "rtt_ms": 12,
                  "avg_latency_ms": 11,
                  "min_latency_ms": 10,
                  "max_latency_ms": 14,
                  "throughput_mbps": 900,
                  "jitter_percent": 0.8
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

const FEATURE_ICONS = {
  'google_ping': Wifi,
  'parallel_download': Download,
  'video_streaming': Video,
  'hybrid_test': Zap,
  'client_creation': UserPlus
};

const FEATURE_COLORS = {
  'google_ping': { bg: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: 'text-cyan-400' },
  'parallel_download': { bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/30', text: 'text-green-400', icon: 'text-green-400' },
  'video_streaming': { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'text-purple-400' },
  'hybrid_test': { bg: 'from-amber-500/10 to-orange-500/10', border: 'border-amber-500/30', text: 'text-amber-400', icon: 'text-amber-400' },
  'client_creation': { bg: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'text-blue-400' }
};

const RouterDashboard = () => {
  const [selectedRouter, setSelectedRouter] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedClientTest, setSelectedClientTest] = useState(null);
  const [timeRange, setTimeRange] = useState('MAX');
  const [showHistory, setShowHistory] = useState(false);
  const [selectedHistoryRun, setSelectedHistoryRun] = useState(null);
  // const [routerData, setRouterData] = useState([]);

  // useEffect(() => {
  //   // Fetch from FastAPI instead of sample data
  //   fetch('http://localhost:8000/api/routers')
  //     .then(res => res.json())
  //     .then(data => {
  //       setRouterData(data);
  //       console.log('Loaded routers:', data);
  //     })
  //     .catch(err => console.error('Error loading routers:', err));
  // }, []);

  
  const getAllTestRuns = () => {
    if (!selectedRouter) return [];
    
    const allRuns = [];
    selectedRouter.features.forEach(feature => {
      feature.client_tests.forEach(clientTest => {
        clientTest.runs.forEach(run => {
          allRuns.push({
            ...run,
            feature_name: feature.feature_name,
            client_count: clientTest.client_count
          });
        });
      });
    });
    
    // Sort by timestamp (latest first)
    return allRuns.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  };

  // Filter data based on time range
  const filterDataByTimeRange = (runs) => {
    if (!runs || runs.length === 0) return runs;
    
    const now = new Date('2025-02-13T00:00:00Z'); // Current date for testing
    const filtered = runs.filter(run => {
      const runDate = new Date(run.timestamp);
      const diffMs = now - runDate;
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      switch(timeRange) {
        case '5D': return diffDays >= 0 && diffDays <= 5;
        case '1M': return diffDays >= 0 && diffDays <= 30;
        case '6M': return diffDays >= 0 && diffDays <= 180;
        case 'YTD': 
          return runDate.getFullYear() === now.getFullYear() && runDate <= now;
        case '1Y': return diffDays >= 0 && diffDays <= 365;
        case 'MAX': return true;
        default: return true;
      }
    });
    
    return filtered.length > 0 ? filtered : runs;
  };

  // Process data for charts
  const getChartData = (runs, dataKey) => {
    const filteredRuns = filterDataByTimeRange(runs);
    
    return filteredRuns.map((run, idx) => {
      const date = new Date(run.timestamp);
      const formattedDate = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      if (dataKey === 'creation_time') {
        return {
          date: formattedDate,
          timestamp: run.timestamp,
          value: run.client_creation_time_seconds,
          status: run.status
        };
      } else if (dataKey === 'router_cpu' || dataKey === 'machine_cpu') {
        const cpuData = dataKey === 'router_cpu' ? run.cpu_utilization.router : run.cpu_utilization.machine;
        const avgCpu = cpuData.reduce((a, b) => a + b, 0) / cpuData.length;
        const maxCpu = Math.max(...cpuData);
        
        return {
          date: formattedDate,
          timestamp: run.timestamp,
          avg: Math.round(avgCpu * 10) / 10,
          max: maxCpu,
          status: run.status,
          isHigh: maxCpu > 50
        };
      }
    });
  };

  // Calculate performance change
  const getPerformanceChange = (runs, dataKey) => {
    const filteredRuns = filterDataByTimeRange(runs);
    if (filteredRuns.length < 2) return { value: 0, trend: 'neutral' };
    
    const latest = filteredRuns[filteredRuns.length - 1];
    const previous = filteredRuns[filteredRuns.length - 2];
    
    let latestValue, previousValue;
    
    if (dataKey === 'creation_time') {
      latestValue = latest.client_creation_time_seconds;
      previousValue = previous.client_creation_time_seconds;
    } else if (dataKey === 'router_cpu' || dataKey === 'machine_cpu') {
      const latestCpu = dataKey === 'router_cpu' ? latest.cpu_utilization.router : latest.cpu_utilization.machine;
      const previousCpu = dataKey === 'router_cpu' ? previous.cpu_utilization.router : previous.cpu_utilization.machine;
      
      latestValue = Math.max(...latestCpu);
      previousValue = Math.max(...previousCpu);
    }
    
    const change = ((latestValue - previousValue) / previousValue) * 100;
    const trend = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';
    
    return { value: Math.abs(Math.round(change * 10) / 10), trend };
  };

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label, isAboveThreshold }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/98 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 shadow-2xl">
          <p className="text-cyan-400 font-mono text-xs mb-3 font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-slate-300 text-sm capitalize">{entry.name}:</span>
              </div>
              <span className={`font-mono text-lg font-bold ml-5 ${
                isAboveThreshold && entry.value > 50 ? 'text-red-400' : 'text-white'
              }`}>
                {typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}
                {entry.name.includes('cpu') || entry.name.includes('CPU') ? '%' : ''}
              </span>
            </div>
          ))}
          {isAboveThreshold && data.isHigh && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-red-500/20">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-semibold">Above 50% Threshold</span>
            </div>
          )}
          {data.status && (
            <div className="mt-2 pt-2 border-t border-slate-700/50">
              <span className={`text-xs font-semibold uppercase ${
                data.status === 'pass' ? 'text-emerald-400' : 
                data.status === 'fail' ? 'text-red-400' : 'text-amber-400'
              }`}>
                {data.status}
              </span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Render metrics based on feature type
  const renderMetrics = (metrics, featureName) => {
    if (!metrics) return null;
    
    const metricsConfig = {
      'google_ping': [
        { label: 'Packet Loss', value: metrics.packet_loss_percent, unit: '%', warn: metrics.packet_loss_percent > 5, icon: Network },
        { label: 'RTT', value: metrics.rtt_ms, unit: 'ms', warn: metrics.rtt_ms > 50, icon: Clock },
        { label: 'Avg Latency', value: metrics.avg_latency_ms, unit: 'ms', warn: false, icon: Activity },
        { label: 'Min/Max', value: `${metrics.min_latency_ms}/${metrics.max_latency_ms}`, unit: 'ms', warn: false, icon: TrendingUp },
        { label: 'Throughput', value: metrics.throughput_mbps, unit: 'Mbps', warn: metrics.throughput_mbps < 500, icon: Zap },
        { label: 'Jitter', value: metrics.jitter_percent, unit: '%', warn: metrics.jitter_percent > 10, icon: Activity }
      ],
      'parallel_download': [
        { label: 'Time Taken', value: metrics.time_taken_seconds, unit: 's', warn: metrics.time_taken_seconds > 300, icon: Clock },
        { label: 'Resolution', value: metrics.resolution, unit: '', warn: false, icon: Video },
        { label: 'Avg Speed', value: metrics.avg_speed_mbps, unit: 'Mbps', warn: metrics.avg_speed_mbps < 500, icon: Download },
        { label: 'Peak Speed', value: metrics.peak_speed_mbps, unit: 'Mbps', warn: false, icon: TrendingUp }
      ],
      'video_streaming': [
        { label: 'Buffering Events', value: metrics.buffering_events, unit: '', warn: metrics.buffering_events > 5, icon: AlertTriangle },
        { label: 'Avg Bitrate', value: metrics.avg_bitrate_mbps, unit: 'Mbps', warn: false, icon: Activity },
        { label: 'Resolution', value: metrics.resolution, unit: '', warn: false, icon: Video },
        { label: 'Dropped Frames', value: metrics.dropped_frames, unit: '', warn: metrics.dropped_frames > 50, icon: XCircle }
      ]
    };
    
    const config = metricsConfig[featureName] || [];
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {config.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div 
              key={idx}
              className={`p-4 rounded-lg border backdrop-blur-sm transition-all hover-lift ${
                metric.warn 
                  ? 'bg-red-500/10 border-red-500/30' 
                  : 'bg-slate-800/50 border-slate-700/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${metric.warn ? 'text-red-400' : 'text-cyan-400'}`} />
                <p className="text-xs text-slate-400">{metric.label}</p>
              </div>
              <p className={`text-lg font-bold font-mono ${
                metric.warn ? 'text-red-400' : 'text-white'
              }`}>
                {metric.value} <span className="text-sm text-slate-500">{metric.unit}</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pass': return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'fail': return <XCircle className="w-4 h-4 text-red-400" />;
      case 'partial': return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pass': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'fail': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'partial': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-['JetBrains_Mono',_monospace]">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 20s linear infinite'
        }} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        
        @keyframes gridPulse {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .hover-lift {
          transition: all 0.2s ease;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.3);
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }
        
        .stock-chart-line {
          filter: drop-shadow(0 0 8px currentColor);
        }
      `}</style>

      {/* Header */}
      <header className="relative border-b border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-[2000px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <Activity className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent glow-text">
                  Router Performance Analysis
                </h1>
                <p className="text-slate-400 text-sm mt-1 font-normal">Real-time network diagnostics & monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {selectedRouter && (
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className={`px-4 py-2 rounded-lg border transition-all hover-lift flex items-center gap-2 ${
                    showHistory
                      ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400'
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-cyan-500/30'
                  }`}
                >
                  <History className="w-5 h-5" />
                  <span className="font-medium">Test History</span>
                </button>
              )}
              <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-emerald-400 text-sm font-medium">{routerData.length} Routers Active</span>
              </div>
              <div className="p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                <Network className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-[2000px] mx-auto relative">
        {/* Left Sidebar - Routers */}
        <aside className="w-80 border-r border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm p-6 min-h-[calc(100vh-89px)] sticky top-0 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Router className="w-4 h-4" />
              Available Routers
            </h2>
          </div>
          
          <div className="space-y-3">
            {routerData.map((router, idx) => (
              <button
                key={router._id}
                onClick={() => {
                  setSelectedRouter(router);
                  setSelectedFeature(null);
                  setSelectedClientTest(null);
                  setShowHistory(false);
                  setSelectedHistoryRun(null);
                }}
                className={`w-full text-left p-4 rounded-lg border transition-all hover-lift animate-slide-in ${
                  selectedRouter?._id === router._id
                    ? 'bg-cyan-500/10 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">{router.router.model}</h3>
                  {selectedRouter?._id === router._id && (
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">
                    <span className="text-cyan-400/70">SN:</span> {router.router.serial_number}
                  </p>
                  <p className="text-xs text-slate-400">
                    <span className="text-cyan-400/70">MAC:</span> {router.router.mac}
                  </p>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-700/50">
                    <div className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {router.router.location}
                    </div>
                    <div className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {router.features.length} tests
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {!selectedRouter ? (
            <div className="flex items-center justify-center h-[calc(100vh-150px)]">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <Router className="w-16 h-16 text-cyan-400/50" />
                  </div>
                </div>
                <p className="text-slate-400 text-lg">Select a router to view performance metrics</p>
                <p className="text-slate-500 text-sm mt-2">Choose from the available routers in the sidebar</p>
              </div>
            </div>
          ) : showHistory ? (
            // Test History View
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      <History className="w-7 h-7 text-cyan-400" />
                      Test History
                    </h2>
                    <p className="text-sm text-slate-400">
                      All test runs for {selectedRouter.router.model} - Sorted by latest
                    </p>
                  </div>
                  <button
                    onClick={() => setShowHistory(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:border-cyan-500/30 transition-all"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>

              {/* History List */}
              <div className="space-y-3">
                {getAllTestRuns().map((run, idx) => {
                  const Icon = FEATURE_ICONS[run.feature_name];
                  const colors = FEATURE_COLORS[run.feature_name];
                  const isExpanded = selectedHistoryRun?.run_id === run.run_id;
                  
                  return (
                    <div
                      key={run.run_id}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden hover-lift animate-slide-in"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <button
                        onClick={() => setSelectedHistoryRun(isExpanded ? null : run)}
                        className="w-full p-5 text-left transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border}`}>
                              <Icon className={`w-5 h-5 ${colors.icon}`} />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-white capitalize">
                                  {run.feature_name.replace(/_/g, ' ')}
                                </h3>
                                <div className={`px-2 py-1 rounded text-xs font-semibold uppercase border ${getStatusColor(run.status)}`}>
                                  {run.status}
                                </div>
                                <div className="px-2 py-1 rounded text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                  {run.client_count} clients
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-4 text-xs text-slate-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {new Date(run.timestamp).toLocaleString()}
                                </span>
                                <span>•</span>
                                <span className="font-mono">{run.run_id}</span>
                              </div>
                            </div>
                          </div>
                          
                          <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </div>
                      </button>
                      
                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="px-5 pb-5 border-t border-slate-700/50 pt-5 animate-fade-in">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/30">
                              <p className="text-xs text-slate-400 mb-1">Creation Time</p>
                              <p className="text-lg font-bold text-white font-mono">
                                {run.client_creation_time_seconds}s
                              </p>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/30">
                              <p className="text-xs text-slate-400 mb-1">Router CPU (Max)</p>
                              <p className={`text-lg font-bold font-mono ${
                                Math.max(...run.cpu_utilization.router) > 50 ? 'text-red-400' : 'text-white'
                              }`}>
                                {Math.max(...run.cpu_utilization.router)}%
                              </p>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/30">
                              <p className="text-xs text-slate-400 mb-1">Machine CPU (Max)</p>
                              <p className={`text-lg font-bold font-mono ${
                                Math.max(...run.cpu_utilization.machine) > 50 ? 'text-red-400' : 'text-white'
                              }`}>
                                {Math.max(...run.cpu_utilization.machine)}%
                              </p>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/30">
                              <p className="text-xs text-slate-400 mb-1">Clients</p>
                              <p className="text-lg font-bold text-white">
                                {run.client_count}
                              </p>
                            </div>
                          </div>
                          
                          {run.metrics && (
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Test Metrics</h4>
                              {renderMetrics(run.metrics, run.feature_name)}
                            </div>
                          )}
                          
                          {run.error && (
                            <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                              <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-red-400 mb-1">{run.error.code}</p>
                                  <p className="text-sm text-slate-300">{run.error.message}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Regular Dashboard View
            <div className="space-y-6 animate-fade-in">
              {/* Router Info */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedRouter.router.model}</h2>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>Firmware: <span className="text-cyan-400">{selectedRouter.router.firmware_version}</span></span>
                      <span>•</span>
                      <span>Location: <span className="text-cyan-400">{selectedRouter.router.location}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Test Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {selectedRouter.features.map((feature, idx) => {
                    const Icon = FEATURE_ICONS[feature.feature_name] || Activity;
                    const colors = FEATURE_COLORS[feature.feature_name] || FEATURE_COLORS['google_ping'];
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedFeature(feature);
                          setSelectedClientTest(null);
                        }}
                        className={`text-left p-5 rounded-lg border transition-all hover-lift ${
                          selectedFeature?.feature_name === feature.feature_name
                            ? `bg-gradient-to-br ${colors.bg} ${colors.border} shadow-lg`
                            : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border}`}>
                            <Icon className={`w-5 h-5 ${colors.icon}`} />
                          </div>
                        </div>
                        <h4 className="font-semibold text-white capitalize mb-1 text-sm">
                          {feature.feature_name.replace(/_/g, ' ')}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {feature.client_tests.length} client configs
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client Test Selection */}
              {selectedFeature && (
                <div className="animate-fade-in">
                  <h3 className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Client Configurations
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {[5, 10, 20, 50, 100, 200].map((clientCount) => {
                      const testData = selectedFeature.client_tests.find(ct => ct.client_count === clientCount);
                      const hasData = !!testData;
                      const colors = FEATURE_COLORS[selectedFeature.feature_name];
                      
                      return (
                        <button
                          key={clientCount}
                          onClick={() => hasData && setSelectedClientTest(testData)}
                          disabled={!hasData}
                          className={`p-4 rounded-lg border transition-all ${
                            hasData ? 'hover-lift cursor-pointer' : 'opacity-40 cursor-not-allowed'
                          } ${
                            selectedClientTest?.client_count === clientCount
                              ? `bg-gradient-to-br ${colors.bg} ${colors.border} shadow-lg`
                              : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Users className={`w-4 h-4 ${hasData ? colors.icon : 'text-slate-600'}`} />
                            {hasData && testData.runs.length > 0 && (
                              <div className="flex gap-1">
                                {testData.runs.slice(-3).map((run, i) => (
                                  <div key={i} className="w-1.5 h-1.5 rounded-full">
                                    {getStatusIcon(run.status)}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <p className={`text-2xl font-bold ${hasData ? 'text-white' : 'text-slate-600'}`}>
                            {clientCount}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {hasData ? `${testData.runs.length} runs` : 'No data'}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Charts Section */}
              {selectedClientTest && (
                <div className="space-y-6 animate-fade-in">
                  {/* Time Range Selector - Stock Market Style */}
                  <div className="flex items-center justify-between bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-400">Time Range</span>
                      <span className="text-xs text-slate-500 ml-2">
                        ({filterDataByTimeRange(selectedClientTest.runs).length} of {selectedClientTest.runs.length} runs)
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {['5D', '1M', '6M', 'YTD', '1Y', 'MAX'].map((range) => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            timeRange === range
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                              : 'bg-slate-800/50 text-slate-400 hover:text-cyan-400 border border-slate-700/50'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chart 1: Client Creation Time */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-1">
                          <Clock className="w-5 h-5 text-cyan-400" />
                          Client Creation Time
                        </h4>
                        <p className="text-sm text-slate-400">
                          Time taken to create {selectedClientTest.client_count} clients
                        </p>
                      </div>
                      {(() => {
                        const change = getPerformanceChange(selectedClientTest.runs, 'creation_time');
                        return (
                          <div className="flex items-center gap-2">
                            {change.trend === 'up' ? (
                              <TrendingUp className="w-5 h-5 text-red-400" />
                            ) : change.trend === 'down' ? (
                              <TrendingDown className="w-5 h-5 text-emerald-400" />
                            ) : null}
                            <span className={`text-lg font-bold ${
                              change.trend === 'up' ? 'text-red-400' : 
                              change.trend === 'down' ? 'text-emerald-400' : 'text-slate-400'
                            }`}>
                              {change.trend !== 'neutral' && (change.trend === 'up' ? '+' : '-')}
                              {change.value}%
                            </span>
                          </div>
                        );
                      })()}
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                      <AreaChart data={getChartData(selectedClientTest.runs, 'creation_time')}>
                        <defs>
                          <linearGradient id="colorCreationTime" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis 
                          dataKey="date" 
                          stroke="#64748b"
                          style={{ fontSize: '11px' }}
                          angle={-15}
                          textAnchor="end"
                          height={60}
                        />
                        <YAxis 
                          stroke="#64748b"
                          style={{ fontSize: '12px' }}
                          label={{ value: 'Seconds', angle: -90, position: 'insideLeft', fill: '#64748b' }}
                        />
                        <Tooltip content={<CustomTooltip isAboveThreshold={false} />} />
                        <Area
                          type="linear"
                          dataKey="value"
                          stroke="#06b6d4"
                          strokeWidth={2}
                          fill="url(#colorCreationTime)"
                          name="Creation Time"
                          className="stock-chart-line"
                          dot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Chart 2: Router CPU Utilization */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-1">
                          <Cpu className="w-5 h-5 text-cyan-400" />
                          Router CPU Utilization
                        </h4>
                        <p className="text-sm text-slate-400">
                          Average and peak CPU usage during tests
                        </p>
                      </div>
                      {(() => {
                        const change = getPerformanceChange(selectedClientTest.runs, 'router_cpu');
                        const latestRun = filterDataByTimeRange(selectedClientTest.runs)[filterDataByTimeRange(selectedClientTest.runs).length - 1];
                        const latestMaxCpu = latestRun ? Math.max(...latestRun.cpu_utilization.router) : 0;
                        const isHigh = latestMaxCpu > 50;
                        
                        return (
                          <div className="flex items-center gap-3">
                            <div className={`px-4 py-2 rounded-lg border ${
                              isHigh 
                                ? 'bg-red-500/10 border-red-500/30' 
                                : 'bg-emerald-500/10 border-emerald-500/30'
                            }`}>
                              <span className={`text-sm font-semibold ${
                                isHigh ? 'text-red-400' : 'text-emerald-400'
                              }`}>
                                {isHigh ? '⚠ Above Threshold' : '✓ Normal Range'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {change.trend === 'up' ? (
                                <TrendingUp className="w-5 h-5 text-red-400" />
                              ) : change.trend === 'down' ? (
                                <TrendingDown className="w-5 h-5 text-emerald-400" />
                              ) : null}
                              <span className={`text-lg font-bold ${
                                change.trend === 'up' ? 'text-red-400' : 
                                change.trend === 'down' ? 'text-emerald-400' : 'text-slate-400'
                              }`}>
                                {change.trend !== 'neutral' && (change.trend === 'up' ? '+' : '-')}
                                {change.value}%
                              </span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                      <AreaChart data={getChartData(selectedClientTest.runs, 'router_cpu')}>
                        <defs>
                          <linearGradient id="colorRouterCpuNormal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorRouterCpuHigh" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis 
                          dataKey="date" 
                          stroke="#64748b"
                          style={{ fontSize: '11px' }}
                          angle={-15}
                          textAnchor="end"
                          height={60}
                        />
                        <YAxis 
                          stroke="#64748b"
                          style={{ fontSize: '12px' }}
                          domain={[0, 100]}
                          label={{ value: 'CPU %', angle: -90, position: 'insideLeft', fill: '#64748b' }}
                        />
                        <Tooltip content={<CustomTooltip isAboveThreshold={true} />} />
                        <ReferenceLine 
                          y={50} 
                          stroke="#ef4444" 
                          strokeDasharray="5 5"
                          strokeWidth={2}
                          label={{ 
                            value: '50% Threshold', 
                            fill: '#ef4444', 
                            fontSize: 12,
                            fontWeight: 'bold',
                            position: 'right'
                          }}
                        />
                        <Area
                          type="linear"
                          dataKey="max"
                          stroke={(data) => {
                            const hasHighCpu = getChartData(selectedClientTest.runs, 'router_cpu').some(d => d.isHigh);
                            return hasHighCpu ? "#ef4444" : "#10b981";
                          }}
                          strokeWidth={2}
                          fill={(data) => {
                            const hasHighCpu = getChartData(selectedClientTest.runs, 'router_cpu').some(d => d.isHigh);
                            return hasHighCpu ? "url(#colorRouterCpuHigh)" : "url(#colorRouterCpuNormal)";
                          }}
                          name="Max CPU"
                          className="stock-chart-line"
                          dot={false}
                        />
                        <Line
                          type="linear"
                          dataKey="avg"
                          stroke="#06b6d4"
                          strokeWidth={1.5}
                          strokeDasharray="5 5"
                          dot={false}
                          name="Avg CPU"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Chart 3: Machine CPU Utilization */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-1">
                          <HardDrive className="w-5 h-5 text-purple-400" />
                          Machine CPU Utilization
                        </h4>
                        <p className="text-sm text-slate-400">
                          Test host machine CPU usage
                        </p>
                      </div>
                      {(() => {
                        const change = getPerformanceChange(selectedClientTest.runs, 'machine_cpu');
                        const latestRun = filterDataByTimeRange(selectedClientTest.runs)[filterDataByTimeRange(selectedClientTest.runs).length - 1];
                        const latestMaxCpu = latestRun ? Math.max(...latestRun.cpu_utilization.machine) : 0;
                        const isHigh = latestMaxCpu > 50;
                        
                        return (
                          <div className="flex items-center gap-3">
                            <div className={`px-4 py-2 rounded-lg border ${
                              isHigh 
                                ? 'bg-red-500/10 border-red-500/30' 
                                : 'bg-emerald-500/10 border-emerald-500/30'
                            }`}>
                              <span className={`text-sm font-semibold ${
                                isHigh ? 'text-red-400' : 'text-emerald-400'
                              }`}>
                                {isHigh ? '⚠ Above Threshold' : '✓ Normal Range'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {change.trend === 'up' ? (
                                <TrendingUp className="w-5 h-5 text-red-400" />
                              ) : change.trend === 'down' ? (
                                <TrendingDown className="w-5 h-5 text-emerald-400" />
                              ) : null}
                              <span className={`text-lg font-bold ${
                                change.trend === 'up' ? 'text-red-400' : 
                                change.trend === 'down' ? 'text-emerald-400' : 'text-slate-400'
                              }`}>
                                {change.trend !== 'neutral' && (change.trend === 'up' ? '+' : '-')}
                                {change.value}%
                              </span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                      <AreaChart data={getChartData(selectedClientTest.runs, 'machine_cpu')}>
                        <defs>
                          <linearGradient id="colorMachineCpuNormal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorMachineCpuHigh" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis 
                          dataKey="date" 
                          stroke="#64748b"
                          style={{ fontSize: '11px' }}
                          angle={-15}
                          textAnchor="end"
                          height={60}
                        />
                        <YAxis 
                          stroke="#64748b"
                          style={{ fontSize: '12px' }}
                          domain={[0, 100]}
                          label={{ value: 'CPU %', angle: -90, position: 'insideLeft', fill: '#64748b' }}
                        />
                        <Tooltip content={<CustomTooltip isAboveThreshold={true} />} />
                        <ReferenceLine 
                          y={50} 
                          stroke="#ef4444" 
                          strokeDasharray="5 5"
                          strokeWidth={2}
                          label={{ 
                            value: '50% Threshold', 
                            fill: '#ef4444', 
                            fontSize: 12,
                            fontWeight: 'bold',
                            position: 'right'
                          }}
                        />
                        <Area
                          type="linear"
                          dataKey="max"
                          stroke={(data) => {
                            const hasHighCpu = getChartData(selectedClientTest.runs, 'machine_cpu').some(d => d.isHigh);
                            return hasHighCpu ? "#ef4444" : "#8b5cf6";
                          }}
                          strokeWidth={2}
                          fill={(data) => {
                            const hasHighCpu = getChartData(selectedClientTest.runs, 'machine_cpu').some(d => d.isHigh);
                            return hasHighCpu ? "url(#colorMachineCpuHigh)" : "url(#colorMachineCpuNormal)";
                          }}
                          name="Max CPU"
                          className="stock-chart-line"
                          dot={false}
                        />
                        <Line
                          type="linear"
                          dataKey="avg"
                          stroke="#06b6d4"
                          strokeWidth={1.5}
                          strokeDasharray="5 5"
                          dot={false}
                          name="Avg CPU"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Metrics Section */}
                  {selectedClientTest.runs.length > 0 && selectedClientTest.runs[selectedClientTest.runs.length - 1].metrics && (
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-cyan-400" />
                        Latest Test Metrics
                      </h4>
                      {renderMetrics(
                        selectedClientTest.runs[selectedClientTest.runs.length - 1].metrics,
                        selectedFeature.feature_name
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RouterDashboard; 