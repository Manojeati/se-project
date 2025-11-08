import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@components/common/Card'
import Button from '@components/common/Button'

interface Contest {
  id: string
  title: string
  description: string
  startTime: Date
  endTime: Date
  problems: string[]
  participants: string[]
  leaderboard: Array<{
    userId: string
    username: string
    score: number
    problemsSolved: number
    totalTime: number
    submissions: any[]
  }>
  isActive: boolean
  isUpcoming: boolean
  isFinished: boolean
}

interface ContestCardProps {
  contest: Contest
}

const ContestCard: React.FC<ContestCardProps> = ({ contest }) => {
  const getContestStatus = () => {
    const now = new Date()
    const start = new Date(contest.startTime)
    const end = new Date(contest.endTime)

    if (now < start) return { status: 'upcoming', color: 'text-blue-400 bg-blue-400/20 border-blue-400/30' }
    if (now > end) return { status: 'finished', color: 'text-gray-400 bg-gray-400/20 border-gray-400/30' }
    return { status: 'active', color: 'text-green-400 bg-green-400/20 border-green-400/30' }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString()
  }

  const status = getContestStatus()

  return (
    <Card className="card-3d group hover:glow-hover h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <Link 
          to={`/contests/${contest.id}`}
          className="text-xl font-semibold text-white hover:text-purple-300 transition-colors flex-1"
        >
          {contest.title}
        </Link>
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${status.color}`}>
          {status.status.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-400 mb-4 line-clamp-2 flex-1">
        {contest.description}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Starts:</span>
          <span className="font-medium text-white">{formatDate(contest.startTime)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Ends:</span>
          <span className="font-medium text-white">{formatDate(contest.endTime)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Participants:</span>
          <span className="font-medium text-white">{contest.participants.length}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Problems:</span>
          <span className="font-medium text-white">{contest.problems.length}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <div className="flex space-x-2">
          {contest.isActive && (
            <span className="px-2 py-1 text-xs bg-red-400/20 text-red-400 rounded-md border border-red-400/30 animate-pulse">
              LIVE
            </span>
          )}
        </div>
        <Link to={`/contests/${contest.id}`}>
          <Button size="sm" disabled={contest.isFinished} className="group">
            <span className="group-hover:scale-110 transition-transform">
              {contest.isFinished ? 'View' : 'Enter'}
            </span>
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default ContestCard