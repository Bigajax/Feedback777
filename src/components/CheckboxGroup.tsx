import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange
}) => {
  const handleChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 w-full">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 ${
            selectedValues.includes(option.value)
              ? 'bg-white/40 border-white/60 text-gray-900 shadow-lg shadow-blue-500/20'
              : 'bg-white/20 border-white/30 text-gray-800 hover:bg-white/30 hover:border-white/50'
          }`}
          onClick={() => handleChange(option.value)}
          aria-pressed={selectedValues.includes(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CheckboxGroup;