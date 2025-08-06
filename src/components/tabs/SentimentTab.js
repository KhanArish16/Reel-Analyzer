import SentimentBar from "../SentimentBar";

function SentimentTab({ data }) {
  const sentimentBars = [
    { label: "Positive", icon: "😊", color: "bg-green-500" },
    { label: "Neutral", icon: "😐", color: "bg-gray-500" },
    { label: "Negative", icon: "😞", color: "bg-red-500" },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
        Sentiment Analysis
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
            Caption Sentiment
          </h4>
          <div className="space-y-4">
            {sentimentBars.map((bar, index) => (
              <SentimentBar
                key={index}
                icon={bar.icon}
                label={bar.label}
                value={data.sentiment.caption[bar.label.toLowerCase()]}
                color={bar.color}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
            Comments Sentiment
          </h4>
          <div className="space-y-4">
            {sentimentBars.map((bar, index) => (
              <SentimentBar
                key={index}
                icon={bar.icon}
                label={bar.label}
                value={data.sentiment.comments[bar.label.toLowerCase()]}
                color={bar.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
          Overall Sentiment Score
        </h4>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-3xl lg:text-4xl font-bold text-blue-600">
            {data.sentiment.overallScore}/10
          </div>
          <div className="flex-1 w-full">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${data.sentiment.overallScore * 10}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">
              This reel has a{" "}
              {data.sentiment.overallScore >= 7
                ? "positive"
                : data.sentiment.overallScore >= 4
                ? "neutral"
                : "negative"}{" "}
              overall sentiment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentTab;
