import { Submission } from './submission'

export interface Contest {
  id: string
  title: string
  description: string
  startTime: Date
  endTime: Date
  problems: string[]
  participants: string[]
  leaderboard: LeaderboardEntry[]
  isActive: boolean
  isUpcoming: boolean
  isFinished: boolean
}

export interface LeaderboardEntry {
  userId: string
  username: string
  score: number
  problemsSolved: number
  totalTime: number
  submissions: Submission[]
}