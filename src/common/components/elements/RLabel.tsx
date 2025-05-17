import React, { ReactNode } from 'react';

interface RLabelProps {
  children: ReactNode;
  htmlFor?: string;
  label?: string;
}
const RLabel = ({ children, htmlFor, label }: RLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 block text-sm text-gray-700 dark:text-white"
    >
      <p className="mb-3 text-lg font-semibold">{label}</p>
      {children}
    </label>
  );
};
export default RLabel;
