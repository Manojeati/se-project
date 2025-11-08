import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

const ContestsPage: React.FC = () => {
  const contests = [
    {
      id: 1,
      title: 'Weekly Challenge #42',
      status: 'Live',
      participants: 342,
      startTime: '2025-10-08 10:00 AM',
      duration: '2 hours',
      difficulty: 'Medium',
      prize: '🏆 500 Points',
      problems: 5
    },
    {
      id: 2,
      title: 'Algorithm Sprint',
      status: 'Upcoming',
      participants: 128,
      startTime: '2025-10-10 02:00 PM',
      duration: '3 hours',
      difficulty: 'Hard',
      prize: '🏆 1000 Points',
      problems: 6
    },
    {
      id: 3,
      title: 'Beginner Battle',
      status: 'Upcoming',
      participants: 567,
      startTime: '2025-10-09 09:00 AM',
      duration: '1.5 hours',
      difficulty: 'Easy',
      prize: '🏆 250 Points',
      problems: 4
    },
    {
      id: 4,
      title: 'Data Structures Showdown',
      status: 'Ended',
      participants: 891,
      startTime: '2025-10-05 03:00 PM',
      duration: '2 hours',
      difficulty: 'Medium',
      prize: '🏆 750 Points',
      problems: 5
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500'
      case 'Upcoming':
        return 'bg-blue-500'
      case 'Ended':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400'
      case 'Medium':
        return 'text-yellow-400'
      case 'Hard':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-cyan-400">CODING</span> CONTESTS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join live battles, compete with coders worldwide, and climb the ranks!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {contests.map((contest) => (
            <Card
              key={contest.id}
              className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {contest.title}
                </h3>
                <span className={`${getStatusColor(contest.status)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {contest.status}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-2">👥</span>
                  <span>{contest.participants} participants</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-2">📅</span>
                  <span>{contest.startTime}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-2">⏱️</span>
                  <span>{contest.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-2">📝</span>
                  <span>{contest.problems} problems</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">💪</span>
                  <span className={`font-bold ${getDifficultyColor(contest.difficulty)}`}>
                    {contest.difficulty}
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">{contest.prize}</span>
                </div>
              </div>

              <Link to={`/contest/${contest.id}`}>
                <Button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105">
                  {contest.status === 'Live' ? '🎮 Join Now' : 
                   contest.status === 'Upcoming' ? '📝 Register' : 
                   '📊 View Results'}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContestsPage