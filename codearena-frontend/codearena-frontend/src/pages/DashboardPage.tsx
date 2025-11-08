// pages/DashboardPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const DashboardPage: React.FC = () => {
  // Mock user data
  const userStats = {
    username: 'CodeWarrior',
    rank: 1250,
    streak: 15,
    totalSolved: 47,
    easySolved: 25,
    mediumSolved: 18,
    hardSolved: 4,
    points: 1250,
    joinDate: '2024-01-15'
  };

  const progress = {
    easy: (userStats.easySolved / 100) * 100,
    medium: (userStats.mediumSolved / 75) * 100,
    hard: (userStats.hardSolved / 50) * 100,
    total: (userStats.totalSolved / 225) * 100
  };

  const recentActivity = [
    { problem: 'Two Sum', difficulty: 'Easy', status: 'Solved', time: '2 hours ago' },
    { problem: 'Binary Tree Traversal', difficulty: 'Medium', status: 'Solved', time: '1 day ago' },
    { problem: 'Dynamic Programming', difficulty: 'Hard', status: 'Attempted', time: '2 days ago' },
    { problem: 'Graph Shortest Path', difficulty: 'Medium', status: 'Solved', time: '3 days ago' }
  ];

  const upcomingContests = [
    { title: 'Weekly Challenge #45', date: 'Tomorrow, 8:00 PM', participants: 1250 },
    { title: 'Algorithm Battle Royale', date: 'Dec 25, 6:00 PM', participants: 850 }
  ];

  const CircularProgress: React.FC<{ percentage: number; label: string; color: string }> = 
    ({ percentage, label, color }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{percentage}%</span>
        </div>
      </div>
      <span className="text-gray-400 text-sm mt-2">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome back, <span className="text-cyan-400">{userStats.username}</span>!
          </h1>
          <p className="text-xl text-gray-400">Continue your coding journey</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">📊 Quick Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{userStats.totalSolved}</div>
                  <div className="text-gray-400 text-sm">Solved</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">{userStats.easySolved}</div>
                  <div className="text-gray-400 text-sm">Easy</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{userStats.mediumSolved}</div>
                  <div className="text-gray-400 text-sm">Medium</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-red-400 mb-2">{userStats.hardSolved}</div>
                  <div className="text-gray-400 text-sm">Hard</div>
                </div>
              </div>
            </Card>

            {/* Progress Rings */}
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">🎯 Progress Tracking</h2>
              <div className="flex justify-around">
                <CircularProgress percentage={progress.easy} label="Easy" color="#10B981" />
                <CircularProgress percentage={progress.medium} label="Medium" color="#F59E0B" />
                <CircularProgress percentage={progress.hard} label="Hard" color="#EF4444" />
                <CircularProgress percentage={progress.total} label="Total" color="#06B6D4" />
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">📈 Recent Activity</h2>
                <Link to="/submissions">
                  <Button className="px-4 py-2 bg-gray-800 text-gray-300 hover:text-white rounded-lg">
                    View All
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div>
                      <p className="text-white font-medium">{activity.problem}</p>
                      <p className="text-gray-400 text-sm">{activity.difficulty}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        activity.status === 'Solved' ? 'text-green-400 bg-green-500/20' : 'text-yellow-400 bg-yellow-500/20'
                      }`}>
                        {activity.status}
                      </span>
                      <p className="text-gray-400 text-sm mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Profile & Contests */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {userStats.username.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{userStats.username}</h3>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold">#{userStats.rank}</div>
                    <div className="text-gray-400 text-sm">Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-400 font-bold">{userStats.streak}🔥</div>
                    <div className="text-gray-400 text-sm">Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold">{userStats.points}</div>
                    <div className="text-gray-400 text-sm">Points</div>
                  </div>
                </div>
                <Button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg mb-3">
                  Edit Profile
                </Button>
                <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg">
                  Account Settings
                </Button>
              </div>
            </Card>

            {/* Upcoming Contests */}
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">🏆 Upcoming Contests</h2>
              <div className="space-y-4">
                {upcomingContests.map((contest, index) => (
                  <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="text-white font-medium mb-2">{contest.title}</h4>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>📅 {contest.date}</span>
                      <span>👥 {contest.participants}</span>
                    </div>
                    <Button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg">
                      Register
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">⚡ Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/problems">
                  <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg">
                    Solve Problems
                  </Button>
                </Link>
                <Link to="/contests">
                  <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg">
                    Join Contest
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg">
                    View Leaderboard
                  </Button>
                </Link>
                <Button className="w-full py-3 bg-gray-800 text-gray-300 hover:text-white rounded-lg">
                  Practice Mock
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;