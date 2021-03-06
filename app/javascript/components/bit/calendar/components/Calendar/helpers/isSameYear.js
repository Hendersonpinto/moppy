export default function isSameYear(date1, date2) {
    try {
        const value1 = typeof date1 === 'string' ? new Date(date1) : date1;
        const value2 = typeof date2 === 'string' ? new Date(date2) : date2;
        return !!(value1 && value2 && value1.getYear() === value2.getYear());
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return false;
    }
}
