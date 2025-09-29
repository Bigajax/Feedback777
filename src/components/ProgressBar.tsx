import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full h-1 rounded-full overflow-hidden bg-white/30 border border-white/20">
      <div
        className="h-full bg-gradient-to-r from-white/70 to-sky-200/40 backdrop-blur-sm transition-[width] duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
