export interface Submission {
  id: string
  problemId: string
  userId: string
  code: string
  language: string
  status: 'pending' | 'accepted' | 'wrong_answer' | 'time_limit_exceeded' | 'runtime_error' | 'compilation_error'
  runtime: number
  memory: number
  testCasesPassed: number
  totalTestCases: number
  submittedAt: Date
}