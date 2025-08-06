import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import UserProfile from "../components/UserProfile"
import TabNavigation from "../components/TabNavigation"
import PerformanceTab from "../components/tabs/PerformanceTab"
import SentimentTab from "../components/tabs/SentimentTab"
import CommentsTab from "../components/tabs/CommentsTab"

function AnalyticsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const analyzedUrl = location.state?.url || ""
  const [activeTab, setActiveTab] = useState("performance")

  if (!analyzedUrl) {
    navigate("/")
    return null
  }

  const mockData = {
    user: {
      username: "creator_example",
      profilePic: "https://via.placeholder.com/80",
      followers: "125K",
      verified: true,
    },
    metrics: {
      views: "2.4M",
      likes: "156K",
      comments: "8.2K",
      shares: "12.5K",
      engagementRate: 7.2,
      duration: "0:45",
      publishedDate: "2 days ago",
    },
    sentiment: {
      caption: { positive: 75, negative: 15, neutral: 10 },
      comments: { positive: 60, negative: 25, neutral: 15 },
      overallScore: 6.8,
    },
    topComments: [
      { text: "This is amazing! 🔥", likes: 245, sentiment: "positive" },
      { text: "Love this content", likes: 189, sentiment: "positive" },
      { text: "Not my favorite", likes: 23, sentiment: "negative" },
      { text: "Interesting approach", likes: 67, sentiment: "neutral" },
    ],
  }

  const goHome = () => navigate("/")

  const renderTabContent = () => {
    switch (activeTab) {
      case "performance":
        return <PerformanceTab data={mockData} />
      case "sentiment":
        return <SentimentTab data={mockData} />
      case "comments":
        return <CommentsTab data={mockData} />
      default:
        return <PerformanceTab data={mockData} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onGoHome={goHome} />
      <UserProfile user={mockData.user} />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default AnalyticsPage
