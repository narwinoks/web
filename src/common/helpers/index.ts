import { formatDistanceToNow } from 'date-fns';
import moment from 'moment';

import { useToastContext } from '../hooks/ToastContext';
export const formatDateToAgo = (date: string) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    includeSeconds: false,
  });
};

export const formatNumber = (number: string) => {
  const test = Number(number);
  return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    test,
  );
};

export const formatDate = (date: string, type = 'DD MMM YYYY') => {
  if (!date) {
    return '';
  }
  const formattedDate = moment(date).format(type);
  return formattedDate;
};

export const timeAgo = (dateInput: string | Date) => {
  let date: Date;
  if (typeof dateInput === 'string') {
    date = new Date(dateInput);
  } else {
    date = dateInput;
  }
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 2592000) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 31536000) {
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  const years = Math.floor(secondsPast / 31536000);
  return `${years} year${years > 1 ? 's' : ''} ago`;
};

export const Alert = (
  type: 'success' | 'warn' | 'info' | 'error',
  message: string,
) => {
  const toast = useToastContext();
  switch (type) {
    case 'success':
      toast.success({ heading: 'Info', message, duration: 3000 });
      break;
    case 'warn':
      toast.warning({ heading: 'heading', message, duration: 3000 });
      break;
    case 'info':
      toast.info({ heading: 'heading', message, duration: 3000 });
      break;
    case 'error':
      toast.error({ heading: 'heading', message, duration: 3000 });
      break;
    default:
      throw new Error('Invalid alert type');
  }
};
