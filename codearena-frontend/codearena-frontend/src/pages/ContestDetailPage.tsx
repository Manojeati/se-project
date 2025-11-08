import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

const ContestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState<'problems' | 'leaderboard' | 'info'>('problems')

  // Mock contest data
  const contest = {
    id: id,
    title: 'Weekly Challenge #42',
    status: 'Live',
    participants: 342,
    startTime: '2025-10-08 10:00 AM',
    endTime: '2025-10-08 12:00 PM',
    duration: '2 hours',
    difficulty: 'Medium',
    prize: '🏆 500 Points',
    description: 'Test your algorithmic skills in this weekly challenge featuring 5 carefully curated problems ranging from data structures to dynamic programming.',
    rules: [
      'You can submit solutions in any supported programming language',
      'Each problem has a time limit of 2 seconds',
      'You can submit multiple times, only the best score counts',
      'Plagiarism will result in disqualification'
    ]
  }

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      points: 100,
      solved: 245,
      acceptance: '78%'
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      difficulty: 'Medium',
      points: 200,
      solved: 156,
      acceptance: '62%'
    },
    {
      id: 3,
      title: 'Dynamic Programming Challenge',
      difficulty: 'Hard',
      points: 300,
      solved: 89,
      acceptance: '45%'
    },
    {
      id: 4,
      title: 'Graph Shortest Path',
      difficulty: 'Medium',
      points: 200,
      solved: 134,
      acceptance: '58%'
    },
    {
      id: 5,
      title: 'String Manipulation',
      difficulty: 'Easy',
      points: 100,
      solved: 198,
      acceptance: '71%'
    }
  ]

  const leaderboard = [
    { rank: 1, username: 'CodeMaster3000', score: 900, solved: 5, time: '45:32' },
    { rank: 2, username: 'AlgoNinja', score: 850, solved: 5, time: '52:18' },
    { rank: 3, username: 'ByteWarrior', score: 800, solved: 4, time: '38:45' },
    { rank: 4, username: 'StackOverflow', score: 750, solved: 4, time: '42:12' },
    { rank: 5, username: 'RecursiveGenius', score: 700, solved: 4, time: '48:56' }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-500/20 border-green-500/50'
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50'
      case 'Hard':
        return 'text-red-400 bg-red-500/20 border-red-500/50'
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/50'
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Contest Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/contests" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Contests
            </Link>
          </div>
          
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {contest.title}
                </h1>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {contest.status}
                  </span>
                  <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full text-sm border border-purple-500/50">
                    {contest.difficulty}
                  </span>
                  <span className="text-gray-300 px-4 py-1">
                    👥 {contest.participants} participants
                  </span>
                </div>
              </div>
              
              {contest.status === 'Live' && (
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Time Remaining</div>
                  <div className="text-3xl font-bold text-cyan-400">01:23:45</div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div>
                <div className="text-gray-400 text-sm mb-1">Start Time</div>
                <div className="text-white font-semibold">{contest.startTime}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold">{contest.duration}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Prize</div>
                <div className="text-white font-semibold">{contest.prize}</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {(['problems', 'leaderboard', 'info'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'problems' && (
          <div className="space-y-4">
            {problems.map((problem) => (
              <Card
                key={problem.id}
                className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {problem.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-400">
                      <span>💯 {problem.points} points</span>
                      <span>✅ {problem.solved} solved</span>
                      <span>📊 {problem.acceptance} acceptance</span>
                    </div>
                  </div>
                  <Link to={`/problem/${problem.id}`}>
                    <Button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105">
                      Solve Challenge
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-cyan-400 font-bold">Rank</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-bold">User</th>
                    <th className="px-6 py-4 text-right text-cyan-400 font-bold">Score</th>
                    <th className="px-6 py-4 text-right text-cyan-400 font-bold">Solved</th>
                    <th className="px-6 py-4 text-right text-cyan-400 font-bold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr 
                      key={entry.rank}
                      className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="text-xl font-bold text-cyan-400">#{entry.rank}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{entry.username}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-green-400 font-bold text-lg">{entry.score}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-gray-300">{entry.solved}/5</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-purple-400">{entry.time}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === 'info' && (
          <div className="space-y-6">
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">About This Contest</h2>
              <p className="text-gray-300 leading-relaxed">{contest.description}</p>
            </Card>

            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Contest Rules</h2>
              <ul className="space-y-3">
                {contest.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContestDetailPage