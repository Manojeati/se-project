import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden transform hover:scale-105'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500 disabled:from-purple-400 disabled:to-pink-400 glow',
    secondary: 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-500 disabled:from-blue-400 disabled:to-cyan-400 glow',
    danger: 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-red-500 disabled:from-red-400 disabled:to-pink-400 glow',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className="relative z-10">{children}</span>
      {/* Ripple effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  )
}

export default Button