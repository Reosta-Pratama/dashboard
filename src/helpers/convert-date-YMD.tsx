import React from 'react';

interface DateFormatProps {
    value: string;
}

const DateFormat: React.FC<DateFormatProps> = ({value}) => {
    const convertDate = (dateString : string): string => {
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    };

    const formattedValue = convertDate(value);

    return <> {
        formattedValue
    }</>;
};

export default DateFormat;
