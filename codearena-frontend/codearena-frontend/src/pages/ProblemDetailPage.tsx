import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ProblemDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'problem' | 'submissions' | 'solutions' | 'discuss'>('problem');
  const [code, setCode] = useState(`function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}`);
  const [output, setOutput] = useState<string>('');
  const [isSolved, setIsSolved] = useState(false);

  // Mock problem data based on ID
  const problem = {
    id: parseInt(id || '1'),
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
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 6, we return [0, 1].'
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
    { input: '[2,7,11,15], 9', expected: '[0,1]' },
    { input: '[3,2,4], 6', expected: '[1,2]' },
    { input: '[3,3], 6', expected: '[0,1]' },
    { input: '[1,2,3,4,5], 9', expected: '[3,4]' }
  ];

  const submissions = [
    { id: 1, language: 'JavaScript', status: 'Accepted', runtime: '45ms', timestamp: '2 hours ago' },
    { id: 2, language: 'Python', status: 'Wrong Answer', runtime: 'N/A', timestamp: '1 day ago' },
    { id: 3, language: 'Java', status: 'Time Limit Exceeded', runtime: '>2000ms', timestamp: '3 days ago' }
  ];

  const solutions = [
    { 
      title: 'Optimal Hash Map Solution', 
      language: 'JavaScript', 
      votes: 125,
      code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      explanation: 'Uses a hash map to store numbers and their indices. Time: O(n), Space: O(n)'
    },
    { 
      title: 'Brute Force Approach', 
      language: 'Python', 
      votes: 45,
      code: `def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
      explanation: 'Simple nested loops. Time: O(n²), Space: O(1)'
    }
  ];

  const discussions = [
    { 
      user: 'CodeMaster', 
      question: 'Why is my solution timing out?', 
      replies: 8,
      content: 'I tried using a nested loop but it\'s too slow for large inputs. Any suggestions?',
      timestamp: '5 hours ago'
    },
    { 
      user: 'AlgoExpert', 
      question: 'Edge case when array has duplicates', 
      replies: 12,
      content: 'How does the hash map handle duplicate values?',
      timestamp: '1 day ago'
    },
    { 
      user: 'BeginnerCoder', 
      question: 'Confused about the return type', 
      replies: 3,
      content: 'Should I return the indices or the actual numbers?',
      timestamp: '2 days ago'
    }
  ];

  const tutorials = [
    { title: 'Two Sum - NeetCode', url: '#', platform: 'YouTube', duration: '15:30' },
    { title: 'Hash Tables Explained', url: '#', platform: 'Medium', duration: '8 min read' },
    { title: 'JavaScript Map Object Guide', url: '#', platform: 'MDN', duration: '12 min read' }
  ];

  const hints = [
    'Use a hash map to store numbers and their indices as you iterate',
    'For each number, calculate the complement (target - current number)',
    'Check if the complement exists in the hash map',
    'If found, return the indices, otherwise add current number to map',
    'Time complexity should be O(n) with O(n) space'
  ];

  const runCode = () => {
    setOutput('Running tests...\n');
    
    // Simulate code execution
    setTimeout(() => {
      const results = testCases.map((testCase, index) => {
        const passed = Math.random() > 0.3; // Simulate 70% pass rate
        return `Test ${index + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}\nInput: ${testCase.input}\nExpected: ${testCase.expected}\n`;
      }).join('\n');
      
      setOutput(results + '\nTests completed!');
    }, 1000);
  };

  const submitSolution = () => {
    setOutput('Submitting solution...\n');
    
    // Simulate submission
    setTimeout(() => {
      const passedAllTests = Math.random() > 0.5; // 50% chance of success
      
      if (passedAllTests) {
        setOutput('🎉 Congratulations! All tests passed!\n\n✅ Solution Accepted\n🏆 Points earned: 100\n📈 Rank improved: +25 positions');
        setIsSolved(true);
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setOutput('❌ Submission Failed\n\nSome test cases did not pass:\n- Test 2: Wrong Answer\n- Test 4: Time Limit Exceeded\n\n💡 Try optimizing your solution and try again!');
        setIsSolved(false);
      }
    }, 1500);
  };

  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);

  const showNextHint = () => {
    if (currentHint < hints.length - 1) {
      setCurrentHint(currentHint + 1);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-400 font-mono text-sm">#{problem.id}</span>
                <h1 className="text-4xl font-bold text-white">
                  {problem.title}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  problem.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20 border border-green-500/50' :
                  problem.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20 border border-yellow-500/50' :
                  'text-red-400 bg-red-500/20 border border-red-500/50'
                }`}>
                  {problem.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <span>Acceptance: {problem.acceptance}</span>
                <span>Category: {problem.category}</span>
                {isSolved && (
                  <span className="text-green-400 font-bold">✅ Solved</span>
                )}
              </div>
            </div>
            <Button 
              onClick={submitSolution}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300"
            >
              Submit Solution
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Problem & Tabs */}
          <div className="space-y-6">
            {/* Tabs */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
              <div className="flex border-b border-gray-700 overflow-x-auto">
                {['problem', 'submissions', 'solutions', 'discuss'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-3 font-medium transition-all duration-200 whitespace-nowrap ${
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
              <div className="p-6 max-h-[600px] overflow-y-auto">
                {activeTab === 'problem' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Description</h3>
                      <p className="text-gray-300 whitespace-pre-line leading-relaxed">{problem.description}</p>
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
                          <li key={index} className="font-mono text-sm">{constraint}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'submissions' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Your Submissions</h3>
                    {submissions.map((submission) => (
                      <Card key={submission.id} className="bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-200">
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="text-white font-medium">{submission.language}</p>
                            <p className={`text-sm font-bold ${
                              submission.status === 'Accepted' ? 'text-green-400' : 
                              submission.status === 'Wrong Answer' ? 'text-red-400' : 'text-yellow-400'
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
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">Community Solutions</h3>
                    {solutions.map((solution, index) => (
                      <Card key={index} className="bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-200">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-white font-medium text-lg">{solution.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-green-400 text-sm font-bold">▲ {solution.votes}</span>
                              <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{solution.language}</span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">{solution.explanation}</p>
                          <pre className="bg-gray-900 p-3 rounded-lg text-sm text-green-400 overflow-x-auto">
                            {solution.code}
                          </pre>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === 'discuss' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Community Discussions</h3>
                    {discussions.map((discussion, index) => (
                      <Card key={index} className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-200">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-medium">{discussion.question}</h4>
                            <span className="text-blue-400 text-sm">{discussion.replies} replies</span>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{discussion.content}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-gray-500 text-sm">by {discussion.user}</p>
                            <p className="text-gray-500 text-sm">{discussion.timestamp}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Hints Section */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">💡 Hints</h3>
                <Button 
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-lg text-sm"
                >
                  {showHint ? 'Hide Hints' : 'Show Hints'}
                </Button>
              </div>
              {showHint && (
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400 font-bold mt-1">{currentHint + 1}.</span>
                      <p className="text-yellow-300 flex-1">{hints[currentHint]}</p>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">
                        Hint {currentHint + 1} of {hints.length}
                      </span>
                      {currentHint < hints.length - 1 && (
                        <Button 
                          onClick={showNextHint}
                          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm"
                        >
                          Next Hint
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Tutorials Section */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">🎥 Video Tutorials & Resources</h3>
              </div>
              <div className="p-4 space-y-3">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
                    <div>
                      <p className="text-white font-medium">{tutorial.title}</p>
                      <p className="text-gray-400 text-sm">{tutorial.platform} • {tutorial.duration}</p>
                    </div>
                    <Button className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/50 rounded text-sm">
                      Watch
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Code Editor & Output */}
          <div className="space-y-6">
            {/* Code Editor */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Code Editor</h3>
                <select className="px-3 py-1 bg-gray-800 text-white rounded-lg border border-gray-700 text-sm">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
              </div>
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 font-mono text-sm bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none resize-none"
                  spellCheck="false"
                />
                <div className="flex gap-3 mt-4">
                  <Button 
                    onClick={runCode}
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg"
                  >
                    Run Code
                  </Button>
                  <Button 
                    onClick={submitSolution}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold rounded-lg"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Card>

            {/* Output Console */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">Output</h3>
              </div>
              <div className="p-4">
                <pre className="w-full h-48 font-mono text-sm bg-gray-800 text-white p-4 rounded-lg border border-gray-700 overflow-auto whitespace-pre-wrap">
                  {output || 'Run your code to see output here...'}
                </pre>
              </div>
            </Card>

            {/* AI Assistant */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl">
              <div className="p-4 border-b border-gray-700">
                <h3 className="text-lg font-bold text-white">🤖 AI Assistant</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">Stuck? Get instant help from our AI assistant</p>
                <div className="space-y-3">
                  <Button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg">
                    Explain the Problem
                  </Button>
                  <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg border border-gray-700">
                    Optimize My Code
                  </Button>
                  <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg border border-gray-700">
                    Debug Error
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage;