import MetricCard from "../MetricCard";

function PerformanceTab({ data }) {
  const metrics = [
    {
      label: "Views",
      value: data.metrics.views,
      icon: "👁️",
      color: "text-blue-600",
    },
    {
      label: "Likes",
      value: data.metrics.likes,
      icon: "❤️",
      color: "text-red-600",
    },
    {
      label: "Comments",
      value: data.metrics.comments,
      icon: "💬",
      color: "text-green-600",
    },
    {
      label: "Shares",
      value: data.metrics.shares,
      icon: "🔄",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
        Performance Metrics
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
            Engagement Rate
          </h4>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl lg:text-3xl font-bold text-green-600">
              {data.metrics.engagementRate}%
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
              ↗️ Above Average
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 lg:h-3 mb-4">
            <div
              className="bg-green-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${data.metrics.engagementRate * 10}%` }}
            ></div>
          </div>
          <p className="text-xs lg:text-sm text-gray-600">
            Industry average: 3.5% | Your rate: {data.metrics.engagementRate}%
          </p>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
            Video Details
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Duration:</span>
              <span className="flex items-center gap-1">
                <span>▶️</span>
                <span>{data.metrics.duration}</span>
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-gray-700">Published:</span>
              <span>{data.metrics.publishedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceTab;
