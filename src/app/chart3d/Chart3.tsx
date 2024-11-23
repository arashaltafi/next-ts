import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown';

// Initialize the drilldown module
if (typeof Highcharts === 'object') {
    drilldown(Highcharts);
}

const Chart3 = () => {
    const [options, setOptions] = useState<Highcharts.Options>({});

    useEffect(() => {
        setOptions({
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                style: {
                    direction: 'ltr', // Enables RTL for the entire chart
                },
            },
            title: {
                text: '',
            },
            subtitle: {
                text: '',
            },
            accessibility: {
                announceNewData: {
                    enabled: false,
                },
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                title: {
                    text: '',
                },
            },
            legend: {
                enabled: false,
            },
            plotOptions: {
                series: {
                    borderWidth: 1,
                    dataLabels: {
                        enabled: false,
                    },
                },
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px"></span><br>',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: %<b>{point.y:.1f}</b><br/>',
            },
            series: [
                {
                    type: 'column',
                    name: 'Categories',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'ایجاد شده',
                            y: 40,
                            drilldown: 'category-a',
                            
                        },
                        {
                            name: 'توثیق شده',
                            y: 30,
                            drilldown: 'category-b',
                        },
                        {
                            name: 'تکمیل نشده',
                            y: 20,
                            drilldown: 'category-c',
                        },
                        {
                            name: 'در انتظار رسیدگی',
                            y: 20,
                            drilldown: 'category-c',
                        },
                        {
                            name: 'رفع توثیق شده',
                            y: 20,
                            drilldown: 'category-c',
                        },
                    ],
                } as Highcharts.SeriesColumnOptions,
            ],
            drilldown: {
                series: [
                    {
                        id: 'category-a',
                        type: 'column', // Explicitly specify the type
                        name: 'Category A Details',
                        data: [
                            ['Subcategory A1', 20],
                            ['Subcategory A2', 15],
                            ['Subcategory A3', 5],
                        ],
                    },
                    {
                        id: 'category-b',
                        type: 'column', // Explicitly specify the type
                        name: 'Category B Details',
                        data: [
                            ['Subcategory B1', 10],
                            ['Subcategory B2', 10],
                            ['Subcategory B3', 10],
                        ],
                    },
                    {
                        id: 'category-c',
                        type: 'column', // Explicitly specify the type
                        name: 'Category C Details',
                        data: [
                            ['Subcategory C1', 10],
                            ['Subcategory C2', 5],
                            ['Subcategory C3', 5],
                        ],
                    },
                ],
            },
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

export default Chart3;
