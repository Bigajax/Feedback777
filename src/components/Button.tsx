import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2";

  const variantClasses = {
    primary:
      "bg-white/60 text-slate-700 border border-white/40 backdrop-blur-md shadow-lg shadow-slate-900/10 hover:bg-white/70 hover:shadow-xl hover:shadow-slate-900/15 hover:backdrop-blur-lg focus:bg-white/70 focus:shadow-xl focus:shadow-slate-900/20 focus:backdrop-blur-lg focus-visible:ring-white/60 active:bg-white/65 active:shadow-md active:shadow-slate-900/25",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
