const getDiffDays = (date: Date) =>
    Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

export const getFormattedTime = (date: Date): string =>
    `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

export const getFormattedDate = (date: Date): string => {
    const diffDays = getDiffDays(date);
    const dayPlural = diffDays === 1 ? 'day' : `${diffDays} days`;
    return `${dayPlural} ago, ${getFormattedTime(date)}`;
};

export const isToday = (date: Date): boolean => getDiffDays(date) === 0;
export const isYesterday = (date: Date): boolean => getDiffDays(date) === 1;
