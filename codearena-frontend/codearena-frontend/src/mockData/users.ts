export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: Date
}

export interface UserProfile {
  userId: string
  rating: number
  rank: string
  problemsSolved: number
  contestsParticipated: number
  submissions: SubmissionStats[]
  skillTags: SkillTag[]
}

export interface SubmissionStats {
  difficulty: string
  count: number
  accepted: number
}

export interface SkillTag {
  name: string
  level: number
  problemsSolved: number
}