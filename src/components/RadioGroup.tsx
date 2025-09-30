import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: Option[];
  name: string;
  value: string;
  onChange: (value: string) => void;
  layout?: 'horizontal' | 'vertical';
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  value,
  onChange,
  layout = 'horizontal'
}) => {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col space-y-4' : 'flex-row justify-between'} w-full`}>
      {options.map((option) => (
        <div key={option.value} className="flex flex-col items-center">
          <button
            type="button"
            className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center backdrop-blur-sm ${
              value === option.value
                ? 'border-white/60 bg-white/30 shadow-lg shadow-blue-500/20'
                : 'border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20'
            }`}
            onClick={() => onChange(option.value)}
            aria-checked={value === option.value}
            role="radio"
          >
            {value === option.value && (
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 shadow-inner shadow-blue-500/40 animate-scale"></div>
            )}
          </button>
          <label className="mt-2 text-sm text-center">{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;