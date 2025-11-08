// Leaderboard.tsx
import React from 'react'
import Card from '@components/common/Card'

interface LeaderboardEntry {
  userId: string
  username: string
  score: number
  problemsSolved: number
  totalTime: number
  submissions: any[]
}

interface LeaderboardProps {
  entries: LeaderboardEntry[]
  contestTitle?: string
}

const Leaderboard: React.FC<LeaderboardProps> = ({ entries, contestTitle }) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">
        {contestTitle ? `${contestTitle} Leaderboard` : 'Leaderboard'}
      </h2>
      
      {entries.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No leaderboard data available yet
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Rank</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Score</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Solved</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Time (min)</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr 
                  key={entry.userId} 
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">
                    <div className="flex items-center">
                      <span className="w-6 text-center">#{index + 1}</span>
                      {index < 3 && (
                        <span className="ml-2">
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm mr-3">
                        {entry.username.charAt(0).toUpperCase()}
                      </div>
                      <span>{entry.username}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">
                    {entry.score}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {entry.problemsSolved}/{entries[0]?.problemsSolved || 0}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600">
                    {entry.totalTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  )
}

export default Leaderboard