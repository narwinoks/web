import { createContext, ReactNode, useContext, useState } from 'react';

import ToastMessage from '../components/elements/ToastMessage';

interface ToastType {
  heading: string;
  message: string;
  duration?: number;
  type?: 'success' | 'warn' | 'info' | 'error';
}

interface ToastContextType {
  success: (data: Omit<ToastType, 'type'>) => void;
  warning: (data: Omit<ToastType, 'type'>) => void;
  info: (data: Omit<ToastType, 'type'>) => void;
  error: (data: Omit<ToastType, 'type'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastData, setToastData] = useState<ToastType | null>(null);

  const toastMessageFn = (data: ToastType) => {
    setToastData(data);
  };

  const success = ({ heading, message, duration }: Omit<ToastType, 'type'>) => {
    const toastData: ToastType = {
      heading,
      message,
      duration,
      type: 'success',
    };
    toastMessageFn(toastData);
  };

  const warning = ({ heading, message, duration }: Omit<ToastType, 'type'>) => {
    const toastData: ToastType = { heading, message, duration, type: 'warn' };
    toastMessageFn(toastData);
  };

  const info = ({ heading, message, duration }: Omit<ToastType, 'type'>) => {
    const toastData: ToastType = { heading, message, duration, type: 'info' };
    toastMessageFn(toastData);
  };

  const error = ({ heading, message, duration }: Omit<ToastType, 'type'>) => {
    const toastData: ToastType = { heading, message, duration, type: 'error' };
    toastMessageFn(toastData);
  };

  const value: ToastContextType = { success, warning, info, error };

  return (
    <ToastContext.Provider value={value}>
      {toastData && <ToastMessage toast={toastData} />}
      {children}
    </ToastContext.Provider>
  );
}

// Custom hook for using Toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within an ToastProvider');
  }
  return context;
}
