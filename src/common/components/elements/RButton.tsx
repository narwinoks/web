import React from 'react';
import { FaSpinner } from 'react-icons/fa';

type RButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  disabled?: boolean;
};

const colorClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',
};

const disabledClasses = {
  primary: 'bg-blue-400 text-white cursor-not-allowed',
  secondary: 'bg-gray-400 text-white cursor-not-allowed',
  danger: 'bg-red-400 text-white cursor-not-allowed',
  success: 'bg-green-400 text-white cursor-not-allowed',
};

const RButton: React.FC<RButtonProps> = ({
  children,
  color = 'primary',
  onClick,
  className = '',
  type = 'button',
  isLoading = false,
  disabled = false,
}) => {
  const buttonClasses =
    disabled || isLoading
      ? `${disabledClasses[color]} ${className}`
      : `${colorClasses[color]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition ${buttonClasses}`}
    >
      {isLoading && <FaSpinner className="animate-spin" />}
      {children}
    </button>
  );
};

export default RButton;
