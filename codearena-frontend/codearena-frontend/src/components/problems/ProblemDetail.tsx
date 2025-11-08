import React, { useState } from 'react'
import Card from '@components/common/Card'
import CodeEditor from './CodeEditor'

interface ProblemDetailProps {
  problemId: string
}
// pages/ProblemDetailPage.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ProblemDetailPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'problem' | 'submissions' | 'solutions' | 'discuss'>('problem');
  const [code, setCode] = useState(`function solveProblem(input) {\n  // Your code here\n  return input;\n}`);

  // Mock problem data
  const problem = {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptance: '78%',
    category: 'Array, Hash Table',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ]
  };

  const testCases = [
    { input: '[2,7,11,15], 9', expected: '[0,1]', status: 'passed' },
    { input: '[3,2,4], 6', expected: '[1,2]', status: 'passed' },
    { input: '[3,3], 6', expected: '[0,1]', status: 'failed' }
  ];

  const submissions = [
    { id: 1, language: 'JavaScript', status: 'Accepted', runtime: '45ms', timestamp: '2 hours ago' },
    { id: 2, language: 'Python', status: 'Wrong Answer', runtime: 'N/A', timestamp: '1 day ago' }
  ];

  const solutions = [
    { title: 'Optimal Hash Map Solution', language: 'JavaScript', votes: 125 },
    { title: 'Brute Force Approach', language: 'Python', votes: 45 }
  ];

  const discussions = [
    { user: 'CodeMaster', question: 'Why is my solution timing out?', replies: 8 },
    { user: 'AlgoExpert', question: 'Edge case when array has duplicates', replies: 12 }
  ];

  const tutorials = [
    { title: 'Two Sum - NeetCode', url: '#', platform: 'YouTube' },
    { title: 'Hash Tables Explained', url: '#', platform: 'Medium' }
  ];

  const hints = [
    'Use a hash map to store numbers and their indices',
    'Check if complement exists while iterating',
    'Time complexity should be O(n)'
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {problem.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  problem.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20 border border-green-500/50' :
                  problem.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20 border border-yellow-500/50' :
                  'text-red-400 bg-red-500/20 border border-red-500/50'
                }`}>
                  {problem.difficulty}
                </span>
                <span className="text-gray-400">Acceptance: {problem.acceptance}</span>
                <span className="text-gray-400">Category: {problem.category}</span>
              </div>
            </div>
            <Button className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold rounded-lg">
              Submit Solution
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Problem & Tabs */}
          <div className="space-y-6">
            {/* Tabs */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
              <div className="flex border-b border-gray-700">
                {['problem', 'submissions', 'solutions', 'discuss'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-3 font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'problem' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Description</h3>
                      <p className="text-gray-300 whitespace-pre-line">{problem.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Examples</h3>
                      {problem.examples.map((example, index) => (
                        <Card key={index} className="mb-4 bg-gray-800/50 border border-gray-700">
                          <div className="p-4">
                            <p className="text-white mb-2"><strong>Input:</strong> {example.input}</p>
                            <p className="text-white mb-2"><strong>Output:</strong> {example.output}</p>
                            <p className="text-gray-400"><strong>Explanation:</strong> {example.explanation}</p>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Constraints</h3>
                      <ul className="text-gray-300 list-disc list-inside space-y-2">
                        {problem.constraints.map((constraint, index) => (
                          <li key={index}>{constraint}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Hints */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">💡 Hints</h3>
                      <div className="space-y-2">
                        {hints.map((hint, index) => (
                          <Card key={index} className="bg-yellow-500/10 border border-yellow-500/30">
                            <p className="text-yellow-300 p-3">Hint {index + 1}: {hint}</p>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Tutorials */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">🎥 Video Tutorials</h3>
                      <div className="space-y-2">
                        {tutorials.map((tutorial, index) => (
                          <Card key={index} className="bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-200">
                            <div className="p-3">
                              <p className="text-white font-medium">{tutorial.title}</p>
                              <p className="text-gray-400 text-sm">{tutorial.platform}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'submissions' && (
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <Card key={submission.id} className="bg-gray-800/50 border border-gray-700">
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="text-white font-medium">{submission.language}</p>
                            <p className={`text-sm ${
                              submission.status === 'Accepted' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {submission.status}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">{submission.runtime}</p>
                            <p className="text-gray-400 text-sm">{submission.timestamp}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === 'solutions' && (
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <Card key={index} className="bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-200">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-medium">{solution.title}</h4>
                            <span className="text-green-400 text-sm">▲ {solution.votes}</span>
                          </div>
                          <p className="text-gray-400 text-sm">Language: {solution.language}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === 'discuss' && (
                  <div className="space-y-4">
                    {discussions.map((discussion, index) => (
                      <Card key={index} className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-200">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-medium">{discussion.question}</h4>
                            <span className="text-blue-400 text-sm">{discussion.replies} replies</span>
                          </div>
                          <p className="text-gray-400 text-sm">by {discussion.user}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column - Code Editor & Test Cases */}
          <div className="space-y-6">
            {/* Code Editor */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">Code Editor</h3>
              </div>
              <div className="p-4">
                <select className="w-full mb-4 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 font-mono text-sm bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none resize-none"
                  spellCheck="false"
                />
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg">
                    Run Code
                  </Button>
                  <Button className="flex-1 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold rounded-lg">
                    Submit
                  </Button>
                </div>
              </div>
            </Card>

            {/* Test Cases */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">Test Cases</h3>
              </div>
              <div className="p-4 space-y-3">
                {testCases.map((testCase, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div>
                      <p className="text-white text-sm">Input: {testCase.input}</p>
                      <p className="text-gray-400 text-sm">Expected: {testCase.expected}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      testCase.status === 'passed' ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'
                    }`}>
                      {testCase.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Assistant */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">🤖 AI Assistant</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">Stuck? Get help from our AI assistant</p>
                <Button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg">
                  Get AI Help
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage;
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

const ProblemDetail: React.FC<ProblemDetailProps> = ({ problemId }) => {
  const [activeTab, setActiveTab] = useState('description')

  const mockProblem: Problem = {
    id: problemId,
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    difficulty: 'easy',
    tags: ['array', 'hash-table'],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
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
      {
        language: 'python',
        code: 'def twoSum(nums, target):\n    # Your code here\n    pass',
      },
      {
        language: 'java',
        code: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}',
      },
    ],
    createdAt: new Date('2024-01-01'),
  }

  const difficultyColors = {
    easy: 'text-green-600 bg-green-100',
    medium: 'text-yellow-600 bg-yellow-100',
    hard: 'text-red-600 bg-red-100',
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Problem Description */}
      <div className="space-y-6">
        <Card>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{mockProblem.title}</h1>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${difficultyColors[mockProblem.difficulty]}`}>
              {mockProblem.difficulty.toUpperCase()}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {mockProblem.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-line">{mockProblem.description}</p>
          </div>
        </Card>

        {/* Examples */}
        {mockProblem.examples.map((example, index) => (
          <Card key={index}>
            <h3 className="font-semibold text-lg mb-3">Example {index + 1}</h3>
            <div className="space-y-3">
              <div>
                <strong>Input:</strong>
                <pre className="bg-gray-100 p-3 rounded-md mt-1 text-sm">
                  {example.input}
                </pre>
              </div>
              <div>
                <strong>Output:</strong>
                <pre className="bg-gray-100 p-3 rounded-md mt-1 text-sm">
                  {example.output}
                </pre>
              </div>
              {example.explanation && (
                <div>
                  <strong>Explanation:</strong>
                  <p className="mt-1 text-gray-700">{example.explanation}</p>
                </div>
              )}
            </div>
          </Card>
        ))}

        {/* Constraints */}
        <Card>
          <h3 className="font-semibold text-lg mb-3">Constraints</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {mockProblem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Code Editor Section */}
      <div className="space-y-6">
        <Card>
          <div className="flex border-b">
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'submissions'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('submissions')}
            >
              Submissions
            </button>
          </div>

          <div className="mt-4">
            {activeTab === 'description' && (
              <CodeEditor problem={mockProblem} />
            )}
            {activeTab === 'submissions' && (
              <div className="text-center py-8 text-gray-500">
                No submissions yet
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProblemDetail