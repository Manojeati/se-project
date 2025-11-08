import React from 'react'

interface InputProps {
  label?: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 ${
          error ? 'border-red-500 bg-red-500/10' : 'border-purple-500/30 bg-gray-900/50'
        } ${disabled ? 'bg-gray-800 cursor-not-allowed' : ''} text-white placeholder-gray-500`}
      />
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  )
}

export default Input