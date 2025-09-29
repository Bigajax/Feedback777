import React from 'react';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-lg bg-white/60 border border-white/40 backdrop-blur text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-transparent focus:shadow-lg transition"
    />
  );
};

export default TextInput;