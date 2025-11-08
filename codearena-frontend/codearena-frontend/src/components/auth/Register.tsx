import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import { setCredentials } from '../../store/slices/authSlice'
import Button from '../common/Button'
import Card from '../common/Card'

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      dispatch(setCredentials({
        user: {
          id: '1',
          username: formData.username,
          email: formData.email
        },
        token: 'mock-jwt-token',
        isAuthenticated: true
      }))
      navigate('/dashboard')
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="parallax-bg"></div>
      <div className="floating-grid"></div>
      
      {/* Moving Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="moving-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        ></div>
      ))}

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-center text-white mb-8">
              Join CodeArena
            </h1>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-6 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Choose a username"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '🎮 Creating Account...' : '🚀 Create Account'}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  ← Back to home
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Register