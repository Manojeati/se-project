import React, { useState } from 'react'
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

interface CodeEditorProps {
  problem: Problem
}

const CodeEditor: React.FC<CodeEditorProps> = ({ problem }) => {
  const [code, setCode] = useState(problem.starterCode[0]?.code || '// Write your code here')
  const [language, setLanguage] = useState('javascript')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle submission result
  }

  return (
    <div className="space-y-4">
      {/* Language Selector */}
      <div className="flex justify-between items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
        
        <div className="flex space-x-3">
          <Button variant="secondary" size="sm">
            Run Code
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            size="sm"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-96 font-mono text-sm p-4 focus:outline-none resize-none"
          spellCheck="false"
        />
      </div>

      {/* Test Cases */}
      <div className="space-y-3">
        <h4 className="font-semibold">Test Cases</h4>
        {problem.examples.map((example, index) => (
          <div key={index} className="p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Case {index + 1}</span>
              <span className="text-xs text-gray-500">Expected output</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs text-gray-500 mb-1">Input</div>
                <pre className="bg-gray-100 p-2 rounded">{example.input}</pre>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Output</div>
                <pre className="bg-gray-100 p-2 rounded">{example.output}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodeEditor