import { formatDistanceToNow } from 'date-fns';

export const formatDateToAgo=(date: string) =>{
    return formatDistanceToNow(new Date(date), {
     addSuffix: true,
     includeSeconds: false,
    });
}

export const formatNumber = (number: string) => { 
    let test = Number(number);
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(test);
}