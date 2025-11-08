export interface Problem {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  constraints: string[]
  examples: Example[]
  testCases: TestCase[]
  starterCode: StarterCode[]
  createdAt: Date
}

export interface Example {
  input: string
  output: string
  explanation?: string
}

export interface TestCase {
  input: string
  expectedOutput: string
  isHidden: boolean
}

export interface StarterCode {
  language: string
  code: string
}

export interface Submission {
  id: string
  problemId: string
  userId: string
  code: string
  language: string
  status: 'pending' | 'accepted' | 'rejected' | 'error'
  runtime: number
  memory: number
  submittedAt: Date
}