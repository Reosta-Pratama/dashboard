import React from 'react';

interface ProgressProps {
    percentage: number;
    color: string;
}

export const Progress: React.FC<ProgressProps> = ({ percentage, color }) => {

  return (
    <div className="bg-slate-200 w-full h-2 rounded">
        <div className={`${color} h-full rounded`} style={{ width: percentage + "%" }}></div>
    </div>
  );
};

export default Progress;
