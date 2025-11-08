import React, { useState } from 'react'
import ContestCard from './ContestCard'
import Input from '@components/common/Input'
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

const ContestList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const mockContests: Contest[] = [
    {
      id: '1',
      title: 'Weekly Battle #42',
      description: 'Join our weekly coding contest and compete with programmers from around the world!',
      startTime: new Date('2024-12-20T10:00:00Z'),
      endTime: new Date('2024-12-20T12:00:00Z'),
      problems: ['1', '2', '3', '4'],
      participants: ['user1', 'user2', 'user3', 'user4', 'user5'],
      leaderboard: [
        {
          userId: 'user1',
          username: 'code_master',
          score: 300,
          problemsSolved: 3,
          totalTime: 120,
          submissions: [],
        },
      ],
      isActive: true,
      isUpcoming: false,
      isFinished: false,
    },
    {
      id: '2',
      title: 'Algorithm Showdown',
      description: 'Advanced algorithms competition for experienced coders.',
      startTime: new Date('2024-12-25T14:00:00Z'),
      endTime: new Date('2024-12-25T17:00:00Z'),
      problems: ['5', '6', '7'],
      participants: ['user1', 'user2'],
      leaderboard: [],
      isActive: false,
      isUpcoming: true,
      isFinished: false,
    },
  ]

  const filteredContests = mockContests.filter(contest => {
    const matchesSearch = contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contest.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const now = new Date()
    const start = new Date(contest.startTime)
    const end = new Date(contest.endTime)

    let matchesStatus = true
    if (statusFilter === 'active') {
      matchesStatus = now >= start && now <= end
    } else if (statusFilter === 'upcoming') {
      matchesStatus = now < start
    } else if (statusFilter === 'finished') {
      matchesStatus = now > end
    }

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          placeholder="Search contests..."
          value={searchTerm}
          onChange={setSearchTerm}
          className="flex-1"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900 text-white"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="upcoming">Upcoming</option>
          <option value="finished">Finished</option>
        </select>
        <Button 
          onClick={() => {
            setSearchTerm('')
            setStatusFilter('all')
          }}
          variant="secondary"
        >
          Clear
        </Button>
      </div>

      {/* Contest Grid */}
      {filteredContests.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No contests found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredContests.map(contest => (
            <ContestCard key={contest.id} contest={contest} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ContestList