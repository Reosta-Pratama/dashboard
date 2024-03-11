interface NumberFormatProps {
    value: number;
}

const convertNumber = (num: number): string => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};

const NumberFormat: React.FC<NumberFormatProps> = ({ value }) => {
    const formattedValue = convertNumber(value);

    return <>{` ${formattedValue}`}</>;
};

export default NumberFormat;