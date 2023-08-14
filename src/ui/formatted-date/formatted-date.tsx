import React from 'react';
import { getFormattedDate, isYesterday, isToday, getFormattedTime } from './formatted-date.utils';

export const FormattedDate: React.FC<{
    date: Date;
    className?: string;
}> = ({ date, className }) => {
    if (isToday(date)) {
        return <span className={className}>Today, {getFormattedTime(date)}</span>;
    }

    if (isYesterday(date)) {
        return <span className={className}>Yesterday, {getFormattedTime(date)}</span>;
    }

    return <span className={className}>{getFormattedDate(date)}</span>;
};
