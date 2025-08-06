function UserProfile({ user }) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img 
            src={user.profilePic || "/placeholder.svg"} 
            alt="Profile" 
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900">@{user.username}</h2>
              {user.verified && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold w-fit mx-auto sm:mx-0">
                  ✓ Verified
                </span>
              )}
            </div>
            <p className="text-gray-600">{user.followers} followers</p>
          </div>
          <div className="text-center sm:text-right">
            <span className="bg-gray-100 border border-gray-300 px-2 py-1 rounded text-sm mb-2 inline-block">
              Lifestyle
            </span>
            <div className="flex items-center justify-center sm:justify-end gap-1 text-sm text-gray-600">
              <span>🕒</span>
              <span>2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
