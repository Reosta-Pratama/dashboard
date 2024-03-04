import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables, ChartOptions } from 'chart.js';
import { DummyFramework } from '@/dummys/dummy-charts-3';

Chart.register(...registerables);

export const ChartDonut = () => {
    const bgColor = ["#1e3a8a", "#90d12c", "#facc15", "#f97316", "#dc2626", "#1e293b"]
    const dataChart = {
        labels: DummyFramework.map(item => item.title),
        datasets: [{
            label: "Framework",
            data: DummyFramework.map(item => item.total),
            backgroundColor: bgColor,
            hoverOffset: 4
        }]
    };

    const options: ChartOptions<'doughnut'> = {
        plugins: {
            legend: {
                position: 'right' as const,
                labels: {
                    color: "rgb(100, 116, 139)",
                    font: {
                        family: "Roboto" ,
                    },
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className='w-full h-[400px]'>
            <Doughnut
                options={options}
                data={dataChart}
            />
        </div>
    );
};
