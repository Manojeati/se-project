import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@components/common/Card'
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

interface ProblemCardProps {
  problem: Problem
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  const difficultyColors = {
    easy: 'text-green-400 bg-green-400/20 border-green-400/30',
    medium: 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30',
    hard: 'text-red-400 bg-red-400/20 border-red-400/30',
  }

  return (
    <Card className="card-3d group hover:glow-hover h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <Link 
          to={`/problems/${problem.id}`}
          className="text-lg font-semibold text-white hover:text-purple-300 transition-colors flex-1"
        >
          {problem.title}
        </Link>
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${difficultyColors[problem.difficulty]}`}>
          {problem.difficulty.toUpperCase()}
        </span>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
        {problem.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {problem.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30"
          >
            {tag}
          </span>
        ))}
        {problem.tags.length > 3 && (
          <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-md">
            +{problem.tags.length - 3}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xs text-gray-500">
          {new Date(problem.createdAt).toLocaleDateString()}
        </span>
        <Link to={`/problems/${problem.id}`}>
          <Button size="sm" className="group">
            <span className="group-hover:scale-110 transition-transform">Solve</span>
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default ProblemCard