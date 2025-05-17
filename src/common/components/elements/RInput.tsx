import React, { InputHTMLAttributes } from 'react';

interface RInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
  type?: string;
}

const RInput = ({ id, type = 'text', placeholder, ...props }: RInputProps) => {
  return (
    <input
      id={id}
      type={type}
      className="w-full border-none bg-transparent focus:outline-none"
      placeholder={placeholder}
      {...props}
    />
  );
};

export default RInput;
