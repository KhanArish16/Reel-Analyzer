function Navigation({ onGoHome }) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Reel Analytics Dashboard</h1>
            <p className="text-gray-600 text-sm lg:text-base">Comprehensive insights for your Instagram Reel</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <span>📄</span>
              Export PDF
            </button>
            <button 
              onClick={onGoHome}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <span>🔍</span>
              New Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
