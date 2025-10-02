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
  primary: 'bg-slate-700 hover:bg-slate-600 text-white',
  secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-300',
  danger: 'bg-red-800 hover:bg-red-700 text-white',
  success: 'bg-green-800 hover:bg-green-700 text-white',
};

// Warna disesuaikan untuk kondisi disabled pada tema gelap
const disabledClasses = {
  primary: 'bg-slate-800 text-slate-500 cursor-not-allowed',
  secondary: 'bg-slate-900 text-slate-600 cursor-not-allowed',
  danger: 'bg-red-900 text-red-500 cursor-not-allowed',
  success: 'bg-green-900 text-green-500 cursor-not-allowed',
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
