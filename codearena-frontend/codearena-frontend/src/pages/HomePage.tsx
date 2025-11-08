import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const features = [
    {
      title: 'Real-time Battles',
      description: 'Live coding contests with global rankings',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Multi-language',
      description: 'Code in 10+ programming languages',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Learn & Grow',
      description: 'Structured algorithmic learning paths',
      icon: '📚',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Community',
      description: 'Join coders worldwide in epic battles',
      icon: '👥',
      color: 'from-orange-500 to-red-500'
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="parallax-bg"></div>
      <div className="floating-grid"></div>
      
      {/* Moving Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="moving-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
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

      {/* Hero Section */}
      <section className="relative py-32 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white">
              <span className="text-shimmer">CODE</span>
              <span className="text-purple-500">ARENA</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
              Where <span className="text-cyan-400 font-bold">code warriors</span> clash in real-time battles
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link to="/register">
                <Button className="px-12 py-6 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  🚀 START CODING
                </Button>
              </Link>
              <Link to="/login">
                <Button className="px-12 py-6 text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  ⚡ LOGIN
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '500+', label: 'Challenges' },
                { number: '1K+', label: 'Warriors' },
                { number: '50+', label: 'Battles' },
                { number: '10+', label: 'Languages' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">
            THE <span className="text-cyan-400">BATTLEFIELD</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 h-full"
              >
                <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              JOIN THE <span className="text-green-400">BATTLE</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Ready to prove your coding skills?
            </p>
            <Link to="/register">
              <Button className="px-16 py-8 text-2xl bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                🎮 START YOUR JOURNEY
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage