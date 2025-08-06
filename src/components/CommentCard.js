function CommentCard({ comment }) {
  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "positive": return "bg-green-100 text-green-800 border-green-200"
      case "negative": return "bg-red-100 text-red-800 border-red-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-sm leading-relaxed mb-2">{comment.text}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>❤️</span>
          <span>{comment.likes}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded border w-fit ${getSentimentColor(comment.sentiment)}`}>
          {comment.sentiment}
        </span>
      </div>
    </div>
  )
}

export default CommentCard
