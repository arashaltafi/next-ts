"use client"

import React from 'react'
import Chart from "react-apexcharts";

// npm i apexcharts react-apexcharts
// https://apexcharts.com/
const Apexcharts = () => {

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1>Apexcharts</h1>
            <Chart
                options={options}
                series={series}
                type="line"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="area"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="pie"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="donut"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="radialBar"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="scatter"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="bubble"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="heatmap"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="candlestick"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="boxPlot"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="radar"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="treemap"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="rangeArea"
                width="500"
            />
            <Chart
                options={options}
                series={series}
                type="rangeBar"
                width="500"
            />
        </div>
    )
}

export default Apexcharts