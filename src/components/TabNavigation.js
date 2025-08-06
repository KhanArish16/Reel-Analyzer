function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "performance", label: "Performance", icon: "📊" },
    { id: "sentiment", label: "Sentiment", icon: "😊" },
    { id: "comments", label: "Comments", icon: "💬" },
  ]

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 min-w-32 px-4 py-4 border-b-3 transition-all ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium text-sm lg:text-base">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TabNavigation
