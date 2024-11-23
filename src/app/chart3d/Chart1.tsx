import React, { useEffect, useState } from 'react'
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie";
import Highcharts from "highcharts";

const Chart1 = () => {
    // Initialize the variable pie module
    if (typeof Highcharts === 'object') {
        variablePie(Highcharts);
    }

    const [options, setOptions] = useState<Highcharts.Options>({})

    useEffect(() => {
        setOptions({
            chart: {
                type: "variablepie",
                margin: [0, 10, 0, 10],
                backgroundColor: "transparent",
                events: {
                    render: function () {
                        if (this.customText) {
                            this.customText.destroy();
                        }
                    },
                }
            },
            title: {
                text: ""
            },
            tooltip: {
                headerFormat: "",
                pointFormat:
                    '<span style="color:{point.color};">\u25CF</span> <b> ' +
                    "{point.name}</b><br/>" +
                    "<b>{point.z:.0f}%</b>"
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        formatter: function () {
                            if (this.percentage > 0 && parseFloat(this.percentage.toFixed(0)) > 0) {
                                // return `${this.point.name} %${this.percentage.toFixed(0)}`;
                                return `%${this.percentage.toFixed(0)}`;
                            }
                            return null;
                        },
                        style: {
                            fontSize: '0.7em',
                            fontWeight: 'normal',
                            whiteSpace: 'nowrap'
                        },
                        crop: false,
                        overflow: 'allow',
                    }]
                }
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            series: [
                {
                    type: 'variablepie',
                    minPointSize: 10,
                    innerSize: "50%",
                    size: "100%",
                    zMin: 0,
                    zMax: 100,
                    name: "assets",
                    borderRadius: 4,
                    data: [
                        { name: "صندوق", y: 10, z: 10 },
                        { name: "سهام", y: 20, z: 20 },
                        { name: "بیمه", y: 50, z: 50 },
                        { name: "سپرده بانکی", y: 20, z: 20 },
                    ],
                    colors: ["#276FFF", "#33C600", "#4F00B2", "#C66B00"],
                    connectors: {
                        enabled: false,
                    },
                    legend: {
                        enabled: false
                    },
                    zIndex: 3,
                    showInMap: false,
                    showInLegend: false,
                    cursor: "pointer",
                } as Highcharts.SeriesVariablepieOptions,
            ],
            credits: {
                enabled: false,
            },
        })
    }, [])

    return (
        <div className='w-full -my-12 z-0'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default Chart1