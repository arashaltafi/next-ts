import React from 'react'
import {
    ChartOptions,
    ChartData,
} from 'chart.js'
import { Bar, Line, Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

// npm i chart.js react-chartjs-2
// https://react-chartjs-2.js.org/examples/
// https://react-chartjs-2.js.org/components/
const ChartJs = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        LineElement,
        PointElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    )

    const barData: ChartData<'bar'> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Monthly Sales',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    }

    const barOptions: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }

    // Line Chart Data and Options
    const lineData: ChartData<'line'> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Temperature',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    }

    const lineOptions: ChartOptions<'line'> = {
        responsive: true,
    }

    // Pie Chart Data and Options
    const pieData: ChartData<'pie'> = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    }

    const pieOptions: ChartOptions<'pie'> = {
        responsive: true,
    }

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-center'>
            <h1>ChartJs React</h1>

            <h2>Bar Chart</h2>
            <Bar data={barData} options={barOptions} />
            <hr style={{ margin: '50px 0' }} />

            <h2>Line Chart</h2>
            <Line data={lineData} options={lineOptions} />
            <hr style={{ margin: '50px 0' }} />

            <h2>Pie Chart</h2>
            <Pie data={pieData} options={pieOptions} />
        </div>
    )
}

export default ChartJs