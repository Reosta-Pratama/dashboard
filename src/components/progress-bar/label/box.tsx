import React from 'react';

interface ProgressLabelProps {
    percentage: number;
    color: string;
}

export const ProgressLabel: React.FC<ProgressLabelProps> = ({ percentage, color }) => {

  return (
    <div className="bg-slate-200 w-full h-4 rounded">
        <div className={`${color} h-full flex justify-center items-center rounded`} style={{ width: percentage + "%" }}>
            <p className='text-white text-xs'>{percentage}%</p>
        </div>
    </div>
  );
};

export default ProgressLabel;
