function UrlInput({ url, setUrl, isAnalyzing, onAnalyze }) {
  const sampleUrls = [
    "https://www.instagram.com/reel/DMCK8BCBhcd",
    "https://www.instagram.com/reel/DLcjbWxzuiD",
  ];

  return (
    <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="text-center pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Analyze Your Reel
          </h2>
          <p className="text-base text-gray-600">
            Enter an Instagram Reel URL to get comprehensive analytics
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="https://www.instagram.com/reel/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <button
              onClick={onAnalyze}
              disabled={!url || isAnalyzing}
              className="h-12 px-6 sm:px-8 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <span>🔍</span>
                  Analyze Reel
                </>
              )}
            </button>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p className="font-medium">Sample URLs to try:</p>
            <div className="space-y-2">
              {sampleUrls.map((sampleUrl, index) => (
                <button
                  key={index}
                  className="block w-full text-left text-blue-600 hover:underline p-2 rounded hover:bg-blue-50 transition-colors"
                  onClick={() => setUrl(sampleUrl)}
                >
                  {sampleUrl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrlInput;
