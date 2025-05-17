import React from 'react';

interface RTextareaProps {
  id: string;
  rows: number;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const RTextarea = ({
  id,
  rows = 1,
  placeholder,
  value,
  onChange,
  ...props
}: RTextareaProps) => {
  return (
    <textarea
      name={id}
      id={id}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border-none bg-transparent focus:outline-none"
      {...props}
    />
  );
};

export default RTextarea;
