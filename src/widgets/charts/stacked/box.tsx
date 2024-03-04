import { Bar } from 'react-chartjs-2';
import { Chart, registerables, ChartOptions } from 'chart.js';
import { NewDummyChart } from '@/dummys/dummy-charts-2';

Chart.register(...registerables);

export const ChartStacked = () => {
    const bgColor = ["#1e3a8a", "#cbd5e1", "#90d12c", "#facc15", "#f97316", "#dc2626", "#1e293b"]
    const dataChart = {
            labels: NewDummyChart[0].data.map((item) => item.month.substring(0, 3)), // Mengambil 3 huruf pertama
            datasets: NewDummyChart.map((item, index) => ({
            label: item.title,
            barThickness: 8,
            backgroundColor: bgColor[index % bgColor.length], 
            data: item.data.map(subItem => subItem.total),
            borderWidth: 1,
        }))
    };

    let maxValue = Number.NEGATIVE_INFINITY;
    let minValue = Number.POSITIVE_INFINITY;
    
    NewDummyChart.forEach((chart) => {
        chart.data.forEach((item) => {
            if (item.total > maxValue) {
                maxValue = item.total;
            }
            if (item.total < minValue) {
                minValue = item.total;
            }
        });
    });
    
    const options: ChartOptions<'bar'> = {
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: "rgb(100, 116, 139)",
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                min: minValue - 200,
                max: maxValue + 300,
                ticks: {
                    color: "rgb(100, 116, 139)",
                    precision: 0,
                    stepSize: 200,
                    callback: function (value) {
                        if (Number.isInteger(value)) {
                            return "$" + value;
                        }
                    }
                },
                border: {
                    display: false,
                    color: "#cbd5e1",
                    dash: [2, 2]

                },
                grid: {
                    color: "#cbd5e1",
                }
            }
        },
        plugins: {
            legend: {
                position: 'top' as const,
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
            <Bar
                options={options}
                data={dataChart}
            />
        </div>
    );
};
