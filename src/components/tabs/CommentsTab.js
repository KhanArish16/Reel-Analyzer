import CommentCard from "../CommentCard";

function CommentsTab({ data }) {
  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
        Comment Analysis
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
            Top Engaging Comments
          </h4>
          <div className="space-y-3 lg:space-y-4">
            {data.topComments.map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
          <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
            Comment Analytics
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Total Comments:
              </span>
              <span className="font-semibold">{data.metrics.comments}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Spam Detected:
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                <span>🚫</span>
                12 comments
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Avg. Comment Length:
              </span>
              <span className="font-semibold">24 words</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Response Rate:
              </span>
              <span className="font-semibold">15%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-gray-900">
          Most Used Words
        </h4>
        <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
          {[
            "amazing",
            "love",
            "great",
            "awesome",
            "beautiful",
            "perfect",
            "wow",
            "nice",
            "cool",
            "fantastic",
          ].map((word, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded font-semibold ${
                index < 3
                  ? "bg-blue-100 text-blue-800 text-base lg:text-lg px-3 py-1"
                  : index < 6
                  ? "bg-green-100 text-green-800 text-sm px-2 py-1"
                  : "bg-purple-100 text-purple-800 text-xs px-2 py-1"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentsTab;
