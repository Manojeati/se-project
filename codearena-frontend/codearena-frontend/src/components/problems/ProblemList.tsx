import React, { useState } from 'react'
import ProblemCard from './ProblemCard'
import Input from '@components/common/Input'
import Button from '@components/common/Button'

interface Problem {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  constraints: string[]
  examples: Array<{ input: string; output: string; explanation?: string }>
  testCases: Array<{ input: string; expectedOutput: string; isHidden: boolean }>
  starterCode: Array<{ language: string; code: string }>
  createdAt: Date
}

const ProblemList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [tagFilter, setTagFilter] = useState('')

  const mockProblems: Problem[] = [
    {
      id: '1',
      title: 'Two Sum',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
      difficulty: 'easy',
      tags: ['array', 'hash-table'],
      constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
      ],
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        },
      ],
      testCases: [
        {
          input: '[2,7,11,15]\n9',
          expectedOutput: '[0,1]',
          isHidden: false,
        },
      ],
      starterCode: [
        {
          language: 'javascript',
          code: 'function twoSum(nums, target) {\n    // Your code here\n};',
        },
      ],
      createdAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: 'Reverse Linked List',
      description: 'Reverse a singly linked list.',
      difficulty: 'medium',
      tags: ['linked-list', 'recursion'],
      constraints: [
        'The number of nodes in the list is the range [0, 5000]',
        '-5000 <= Node.val <= 5000',
      ],
      examples: [
        {
          input: 'head = [1,2,3,4,5]',
          output: '[5,4,3,2,1]',
        },
      ],
      testCases: [],
      starterCode: [],
      createdAt: new Date('2024-01-02'),
    },
  ]

  const allTags = Array.from(new Set(mockProblems.flatMap(p => p.tags)))

  const filteredProblems = mockProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter
    const matchesTag = !tagFilter || problem.tags.includes(tagFilter)
    
    return matchesSearch && matchesDifficulty && matchesTag
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          placeholder="Search problems..."
          value={searchTerm}
          onChange={setSearchTerm}
          className="flex-1"
        />
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="px-3 py-2 border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900 text-white"
        >
          <option value="all">All Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="px-3 py-2 border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-900 text-white"
        >
          <option value="">All Tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <Button 
          onClick={() => {
            setSearchTerm('')
            setDifficultyFilter('all')
            setTagFilter('')
          }}
          variant="secondary"
        >
          Clear
        </Button>
      </div>

      {/* Problem Grid */}
      {filteredProblems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No problems found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProblems.map(problem => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProblemList