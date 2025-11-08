import React from 'react'
import Card from '@components/common/Card'

const LeaderboardPage: React.FC = () => {
  const leaderboardData = [
    { rank: 1, username: 'code_gladiator', score: 2845, problemsSolved: 156, contests: 24 },
    { rank: 2, username: 'algo_samurai', score: 2750, problemsSolved: 142, contests: 22 },
    { rank: 3, username: 'python_ninja', score: 2620, problemsSolved: 138, contests: 20 },
    { rank: 4, username: 'js_ronin', score: 2550, problemsSolved: 135, contests: 19 },
    { rank: 5, username: 'java_shogun', score: 2480, problemsSolved: 128, contests: 18 },
  ]

  return (
    <div className="min-h-screen animated-bg pt-20 relative overflow-hidden">
      <div className="web-network"></div>
      <div className="cyber-grid"></div>
      
      {/* Web nodes for leaderboard */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="web-node"
          style={{
            left: `${20 + i * 15}%`,
            top: '30%',
            animationDelay: `${i * 0.7}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text neon-glow">
            HALL OF FAME
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The elite warriors who have proven their might in the coding colosseum. 
            Will your name be next?
          </p>
        </div>

        <Card className="card-3d p-8 glow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="text-left py-6 px-8 font-bold text-purple-400 text-lg">RANK</th>
                  <th className="text-left py-6 px-8 font-bold text-purple-400 text-lg">WARRIOR</th>
                  <th className="text-left py-6 px-8 font-bold text-purple-400 text-lg">POWER</th>
                  <th className="text-left py-6 px-8 font-bold text-purple-400 text-lg">VICTORIES</th>
                  <th className="text-left py-6 px-8 font-bold text-purple-400 text-lg">BATTLES</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((user) => (
                  <tr 
                    key={user.rank} 
                    className="border-b border-purple-500/10 hover:bg-purple-500/10 transition-all duration-300 group"
                  >
                    <td className="py-6 px-8">
                      <div className="flex items-center">
                        <span className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 group-hover:scale-110 ${
                          user.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/25' :
                          user.rank === 2 ? 'bg-gray-400/20 text-gray-400 border-2 border-gray-500/50 shadow-lg shadow-gray-500/25' :
                          user.rank === 3 ? 'bg-orange-500/20 text-orange-400 border-2 border-orange-500/50 shadow-lg shadow-orange-500/25' :
                          'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50 shadow-lg shadow-purple-500/25'
                        }`}>
                          {user.rank}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-8">
                      <div className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                        {user.username}
                      </div>
                    </td>
                    <td className="py-6 px-8">
                      <span className="font-bold text-green-400 text-lg neon-glow">
                        {user.score}
                      </span>
                    </td>
                    <td className="py-6 px-8">
                      <span className="text-white font-semibold">{user.problemsSolved}</span>
                    </td>
                    <td className="py-6 px-8">
                      <span className="text-white font-semibold">{user.contests}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Ready to claim your spot among the legends?
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/problems" className="cyber-button px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </a>
            <a href="/contests" className="cyber-button px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Join Battle
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardPage