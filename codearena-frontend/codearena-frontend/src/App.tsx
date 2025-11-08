import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import ContestDetailPage from './pages/ContestDetailPage'
import ProblemsPage from './pages/ProblemsPage'
import ProblemDetailPage from './pages/ProblemDetailPage'
import ContestsPage from './pages/ContestsPage'
import LeaderboardPage from './pages/LeaderboardPage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/common/Navbar'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contests" element={<ContestsPage />} />
        <Route path="/contest/:id" element={<ContestDetailPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/problem/:id" element={<ProblemDetailPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App