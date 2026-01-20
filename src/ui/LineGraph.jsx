import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HiCheck } from 'react-icons/hi2';

function LineGraph({ courses }) {
  const { isDarkMode } = useTheme();

  const data = useMemo(() => {
    if (!courses || courses.length === 0) return [];
    return courses.map((course) => ({
      id: course.id,
      label: course.course_title,
      value: course.percentage || 0,
    }));
  }, [courses]);

  // Calculate average attendance
  const avgAttendance = useMemo(() => {
    if (data.length === 0) return 0;
    return Math.round(data.reduce((acc, d) => acc + d.value, 0) / data.length);
  }, [data]);

  const isGoodAttendance = avgAttendance >= 75;

  if (data.length === 0) {
    return (
      <div 
        className={`border rounded-2xl p-6 ${
          isDarkMode 
            ? 'bg-dark-800/50 border-dark-700' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-center h-64">
          <p className={isDarkMode ? 'text-dark-400' : 'text-gray-500'}>
            No courses to display. Add courses to see the attendance trend.
          </p>
        </div>
      </div>
    );
  }

  // SVG dimensions
  const width = 800;
  const height = 280;
  const padding = { top: 20, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Y-axis scale (0 to 100) with increments of 20
  const yLabels = [100, 80, 60, 40, 20, 0];

  // Calculate points
  const points = data.map((d, i) => {
    const x = padding.left + (data.length === 1 ? chartWidth / 2 : (i / (data.length - 1)) * chartWidth);
    const y = padding.top + chartHeight - (d.value / 100) * chartHeight;
    return { x, y, ...d };
  });

  // Generate smooth line path
  const generatePath = () => {
    if (points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;

      const tension = 0.3;
      const cp1x = p1.x + (p2.x - p0.x) * tension;
      const cp1y = p1.y + (p2.y - p0.y) * tension;
      const cp2x = p2.x - (p3.x - p1.x) * tension;
      const cp2y = p2.y - (p3.y - p1.y) * tension;

      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }

    return path;
  };

  const linePath = generatePath();

  // Green color for the line
  const lineColor = '#059669';

  return (
    <div 
      className={`border rounded-2xl overflow-hidden ${
        isDarkMode 
          ? 'bg-dark-800/50 border-dark-700' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Course Attendance
        </h3>
        {/* Green checkmark badge when attendance is good */}
        {isGoodAttendance && (
          <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center shadow-sm">
            <HiCheck className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="px-4 pb-6">
        <svg 
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          style={{ maxHeight: '300px' }}
        >
          {/* Horizontal grid lines */}
          {yLabels.map((label) => {
            const y = padding.top + chartHeight - (label / 100) * chartHeight;
            return (
              <g key={label}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke={isDarkMode ? '#334155' : '#e5e7eb'}
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 12}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fill={isDarkMode ? '#64748b' : '#6b7280'}
                  fontSize="13"
                  fontWeight="500"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* Main curved line */}
          <path
            d={linePath}
            fill="none"
            stroke={lineColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points - small dots on the line */}
          {points.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={lineColor}
            />
          ))}

          {/* X-axis labels (Course Names) */}
          {points.map((point, i) => {
            // Truncate long names
            const maxLen = data.length > 5 ? 10 : data.length > 3 ? 12 : 18;
            const label = point.label.length > maxLen 
              ? point.label.substring(0, maxLen) + '...' 
              : point.label;
            return (
              <text
                key={i}
                x={point.x}
                y={height - 12}
                textAnchor="middle"
                fill={isDarkMode ? '#64748b' : '#6b7280'}
                fontSize="12"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default LineGraph;
