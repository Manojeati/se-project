import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@components/common/Card'
import Button from '@components/common/Button'
import Leaderboard from './Leaderboard'

interface ContestDetailProps {
  contestId: string
}

interface LeaderboardEntry {
  userId: string
  username: string
  score: number
  problemsSolved: number
  totalTime: number
  submissions: any[]
}

interface Contest {
  id: string
  title: string
  description: string
  startTime: Date
  endTime: Date
  problems: string[]
  participants: string[]
  leaderboard: LeaderboardEntry[]
  isActive: boolean
  isUpcoming: boolean
  isFinished: boolean
}

const ContestDetail: React.FC<ContestDetailProps> = ({ contestId }) => {
  // Mock contest data based on contestId
  const mockContest: Contest = {
    id: contestId,
    title: 'Weekly Contest 385',
    description: 'Join our weekly coding contest and compete with programmers from around the world! Solve interesting algorithmic problems and improve your coding skills. This contest features problems ranging from easy to hard difficulty.',
    startTime: new Date('2024-12-20T10:00:00Z'),
    endTime: new Date('2024-12-20T12:00:00Z'),
    problems: ['1', '2', '3', '4'],
    participants: ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'],
    leaderboard: [
      {
        userId: 'user1',
        username: 'code_master',
        score: 300,
        problemsSolved: 3,
        totalTime: 120,
        submissions: [],
      },
      {
        userId: 'user2',
        username: 'algo_expert',
        score: 250,
        problemsSolved: 3,
        totalTime: 150,
        submissions: [],
      },
      {
        userId: 'user3',
        username: 'python_pro',
        score: 200,
        problemsSolved: 2,
        totalTime: 110,
        submissions: [],
      },
    ],
    isActive: true,
    isUpcoming: false,
    isFinished: false,
  }

  const formatDate = (date: Date): string => {
    try {
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch (error) {
      return 'Invalid Date'
    }
  }

  const getTimeRemaining = (): string => {
    try {
      const now = new Date()
      const end = new Date(mockContest.endTime)
      const diff = end.getTime() - now.getTime()
      
      if (diff <= 0) return 'Contest ended'
      
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      
      if (hours > 0) {
        return `${hours}h ${minutes}m remaining`
      } else {
        return `${minutes}m remaining`
      }
    } catch (error) {
      return 'Time calculation error'
    }
  }

  const getContestDuration = (): number => {
    try {
      const start = new Date(mockContest.startTime)
      const end = new Date(mockContest.endTime)
      return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60))
    } catch (error) {
      return 0
    }
  }

  const getContestStatus = (): { text: string; color: string } => {
    if (mockContest.isFinished) return { text: 'Finished', color: 'text-gray-600' }
    if (mockContest.isActive) return { text: 'Active', color: 'text-green-600' }
    if (mockContest.isUpcoming) return { text: 'Upcoming', color: 'text-blue-600' }
    return { text: 'Unknown', color: 'text-gray-600' }
  }

  const status = getContestStatus()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Contest Header */}
        <Card className="p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {mockContest.title}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${status.color} bg-gray-100`}>
                  {status.text}
                </span>
              </div>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {mockContest.description}
              </p>
              
              {/* Contest Schedule */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">Start:</span>
                  <span className="text-gray-600">{formatDate(mockContest.startTime)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">End:</span>
                  <span className="text-gray-600">{formatDate(mockContest.endTime)}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-xl font-semibold text-gray-900 mb-1">
                {getTimeRemaining()}
              </div>
              <div className="text-sm text-gray-500">
                {mockContest.participants.length} participants
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">
                {mockContest.problems.length}
              </div>
              <div className="text-blue-700 font-medium">Problems</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="text-2xl font-bold text-green-600">
                {getContestDuration()}
              </div>
              <div className="text-green-700 font-medium">Hours</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">
                {mockContest.leaderboard.reduce((total, entry) => total + (entry.submissions?.length || 0), 0)}
              </div>
              <div className="text-purple-700 font-medium">Submissions</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button className="min-w-[140px] bg-blue-600 hover:bg-blue-700 text-white">
              {mockContest.isActive ? 'Enter Contest' : 
               mockContest.isUpcoming ? 'View Details' : 'View Problems'}
            </Button>
            
            {mockContest.isActive && (
              <Button className="min-w-[140px] bg-gray-600 hover:bg-gray-700 text-white">
                Practice Mode
              </Button>
            )}
            
            <Button className="min-w-[140px] bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
              Share Contest
            </Button>
          </div>
        </Card>

        {/* Problems List */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Problems</h2>
            <span className="text-sm text-gray-500">
              {mockContest.problems.length} problems • 100 points each
            </span>
          </div>
          
          <div className="space-y-3">
            {mockContest.problems.map((problemId, index) => (
              <div
                key={problemId}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-semibold text-lg">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Problem {index + 1}: Array Manipulation
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Difficulty: {index === 0 ? 'Easy' : index === 1 ? 'Medium' : 'Hard'} • 100 points
                    </p>
                  </div>
                </div>
                <Link 
                  to={`/problems/${problemId}`}
                  className="flex-shrink-0"
                >
                  {/* Fixed: Removed size prop */}
                  <Button className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white">
                    {mockContest.isActive ? 'Solve' : 'View'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Card>

        {/* Leaderboard */}
        <Leaderboard entries={mockContest.leaderboard} contestTitle={mockContest.title} />
      </div>
    </div>
  )
}

export default ContestDetail