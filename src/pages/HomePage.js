import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import UrlInput from "../components/UrlInput"
import FeatureCards from "../components/FeatureCards"

function HomePage() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const navigate = useNavigate()

  const handleAnalyze = () => {
    if (!url) {
      alert("Please enter a URL first!")
      return
    }

    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      navigate("/analytics", { state: { url: url } })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <Header />
          <UrlInput 
            url={url} 
            setUrl={setUrl} 
            isAnalyzing={isAnalyzing} 
            onAnalyze={handleAnalyze} 
          />
          <FeatureCards />
        </div>
      </div>
    </div>
  )
}

export default HomePage
