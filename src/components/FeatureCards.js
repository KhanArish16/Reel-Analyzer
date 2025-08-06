function FeatureCards() {
  const features = [
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Views, likes, engagement rates, and comprehensive metrics"
    },
    {
      icon: "❤️",
      title: "Sentiment Analysis", 
      description: "AI-powered analysis of captions and comments sentiment"
    },
    {
      icon: "📈",
      title: "Growth Insights",
      description: "Hashtag trends, optimization tips, and growth strategies"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
            <h3 className="font-semibold mb-2 text-base sm:text-lg text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureCards
