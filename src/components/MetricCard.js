function MetricCard({ icon, label, value, color }) {
  return (
    <div className="bg-white p-3 lg:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-lg lg:text-xl ${color}`}>{icon}</span>
        <span className="text-xs lg:text-sm font-medium text-gray-600">{label}</span>
      </div>
      <div className="text-xl lg:text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}

export default MetricCard
