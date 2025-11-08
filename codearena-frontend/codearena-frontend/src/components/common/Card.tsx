import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;