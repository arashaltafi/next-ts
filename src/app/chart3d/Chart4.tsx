import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const Chart4 = () => {
    const [options, setOptions] = useState<Highcharts.Options>({});

    useEffect(() => {
        setOptions({
            chart: {
                type: "areaspline",
                backgroundColor: "transparent",
                spacing: [10, 10, 15, 10], // Tighter spacing to reduce gap
                // height: 300, // Adjust height as necessary
                style: {
                    direction: "ltr", // Use correct chart direction for better alignment
                },
            },
            title: {
                text: "",
                style: {
                    fontSize: "16px",
                    fontWeight: "bold",
                },
            },
            subtitle: {
                text: '',
                align: 'left',
            },
            xAxis: {
                categories: [
                    "فروردین",
                    "اردیبهشت",
                    "خرداد",
                    "تیر",
                    "مرداد",
                    "شهریور",
                    "مهر",
                    "آبان",
                    "آذر",
                    "دی",
                    "بهمن",
                    "اسفند",
                ],
                labels: {
                    autoRotation: [-45], // Rotate to fit
                    step: 1, // Ensure every label is shown
                    style: {
                        fontSize: "12px",
                    },
                },
                tickInterval: 1,
                gridLineWidth: 0,
                lineColor: "#cccccc",
                title: {
                    text: '',
                },
            },
            yAxis: {
                title: {
                    text: '',
                },
                min: 0,
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units',
                pointFormat:
                    '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>%{point.y:.0f}</b><br/>',
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5,
                    marker: {
                        enabled: false,
                    },
                },
                series: {
                    dataLabels: {
                        enabled: false,
                    },
                },
            }, //areaspline
            series: [
                {
                    name: "ایجاد",
                    data: [10, 20, 15, 25, 30, 20, 4, 8, 10, 12, 15, 9], //todo get it from props
                    color: "#2E90FA",
                    type: "areaspline",
                },
                {
                    name: "توثیق شده",
                    data: [5, 15, 10, 2, 25, 15, 35, 20, 10, 5, 8, 10], //todo get it from props
                    color: "#12B76A",
                    type: "areaspline",
                },
                {
                    name: "رفع توثیق",
                    data: [2, 12, 8, 16, 20, 12, 30, 15, 20, 25, 30, 28], //todo get it from props
                    color: '#98A2B3',
                    type: "areaspline",
                },
            ],
            credits: {
                enabled: false,
            },
        });
    }, []);

    return (
        <div className="w-full">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default Chart4;
