import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

const ProblemsPage: React.FC = () => {
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      acceptance: '78%',
      category: 'Array, Hash Table',
      solved: 2453,
      points: 100,
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.'
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      difficulty: 'Medium',
      acceptance: '62%',
      category: 'Tree, DFS',
      solved: 1876,
      points: 200,
      description: 'Implement different traversal methods for binary trees: inorder, preorder, and postorder.'
    },
    {
      id: 3,
      title: 'Dynamic Programming Challenge',
      difficulty: 'Hard',
      acceptance: '45%',
      category: 'DP, Recursion',
      solved: 892,
      points: 300,
      description: 'Solve complex problems using dynamic programming techniques and memoization.'
    },
    {
      id: 4,
      title: 'Graph Shortest Path',
      difficulty: 'Medium',
      acceptance: '58%',
      category: 'Graph, BFS',
      solved: 1456,
      points: 200,
      description: 'Find the shortest path between two nodes in a weighted graph using BFS algorithm.'
    },
    {
      id: 5,
      title: 'String Manipulation',
      difficulty: 'Easy',
      acceptance: '71%',
      category: 'String',
      solved: 2198,
      points: 100,
      description: 'Perform various string operations including reversal, palindrome checking, and pattern matching.'
    },
    {
      id: 6,
      title: 'Linked List Reversal',
      difficulty: 'Medium',
      acceptance: '65%',
      category: 'Linked List',
      solved: 1654,
      points: 200,
      description: 'Reverse a singly linked list both iteratively and recursively.'
    },
    {
      id: 7,
      title: 'Maximum Subarray',
      difficulty: 'Easy',
      acceptance: '73%',
      category: 'Array, DP',
      solved: 2301,
      points: 100,
      description: 'Find the contiguous subarray with the largest sum using Kadane\'s algorithm.'
    },
    {
      id: 8,
      title: 'N-Queens Problem',
      difficulty: 'Hard',
      acceptance: '41%',
      category: 'Backtracking',
      solved: 765,
      points: 300,
      description: 'Place N queens on an N×N chessboard so that no two queens threaten each other.'
    },
    {
      id: 9,
      title: 'Merge Intervals',
      difficulty: 'Medium',
      acceptance: '59%',
      category: 'Array, Sorting',
      solved: 1543,
      points: 200,
      description: 'Merge all overlapping intervals in a collection of intervals.'
    },
    {
      id: 10,
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      acceptance: '76%',
      category: 'Stack, String',
      solved: 2567,
      points: 100,
      description: 'Determine if a string containing just parentheses characters is valid.'
    },
    {
      id: 11,
      title: 'LRU Cache Implementation',
      difficulty: 'Hard',
      acceptance: '38%',
      category: 'Design, Hash Table',
      solved: 678,
      points: 300,
      description: 'Design and implement a Least Recently Used (LRU) cache data structure.'
    },
    {
      id: 12,
      title: 'Coin Change',
      difficulty: 'Medium',
      acceptance: '54%',
      category: 'DP',
      solved: 1432,
      points: 200,
      description: 'Find the minimum number of coins needed to make a given amount of change.'
    }
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

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty.toLowerCase() === difficultyFilter
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDifficulty && matchesSearch
  })

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-cyan-400">PROBLEM</span> SET
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sharpen your skills with carefully curated coding challenges
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-8">
          <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Difficulty Filter */}
              <div className="flex gap-3">
                {(['all', 'easy', 'medium', 'hard'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficultyFilter(level)}
                    className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                      difficultyFilter === level
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Problems Grid */}
        <div className="max-w-6xl mx-auto space-y-4">
          {filteredProblems.length === 0 ? (
            <Card className="p-12 text-center bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <p className="text-xl text-gray-400">No problems found matching your criteria</p>
            </Card>
          ) : (
            filteredProblems.map((problem) => (
              <Card
                key={problem.id}
                className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  {/* Problem Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-400 font-mono text-sm">#{problem.id}</span>
                      <h3 className="text-xl font-bold text-white">
                        {problem.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {problem.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        📂 {problem.category}
                      </span>
                      <span className="flex items-center gap-1">
                        ✅ {problem.solved.toLocaleString()} solved
                      </span>
                      <span className="flex items-center gap-1">
                        📊 {problem.acceptance} acceptance
                      </span>
                      <span className="flex items-center gap-1">
                        💯 {problem.points} points
                      </span>
                    </div>
                  </div>

                  {/* Solve Problem Button */}
                  <Link to={`/problem/${problem.id}`}>
                    <Button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                      Solve Problem
                    </Button>
                  </Link>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Progress</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Easy Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Medium Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Hard Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Total Points</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProblemsPage