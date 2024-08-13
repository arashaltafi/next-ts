"use client"

import React, { useEffect } from 'react'
import Highcharts from "highcharts";
import variablePie from "highcharts/modules/variable-pie";

// npm install highcharts @types/highcharts
const Chart = () => {

    // Initialize the variable pie module
    if (typeof Highcharts === 'object') {
        variablePie(Highcharts);
    }

    useEffect(() => {
        Highcharts.chart("container", {
            chart: {
                type: "variablepie",
                backgroundColor: "transparent",
                events: {
                    render: function () {
                        // Remove any existing text
                        if (this.customText) {
                            this.customText.destroy();
                        }
                        // Add custom text in the center
                        this.customText = this.renderer
                            .text(
                                "آرش الطافی", // Your custom text here
                                this.plotLeft + this.plotWidth / 2,
                                this.plotTop + this.plotHeight / 2
                            )
                            .attr({
                                align: "center",
                                verticalAlign: "middle",
                            })
                            .css({
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#fff", // Color of the text
                                fontFamily: "vazir-light",
                            })
                            .add();
                    },
                }
            },
            title: {
                text: ""
            },
            tooltip: {
                headerFormat: "",
                pointFormat:
                    '<span style="color:{point.color}">\u25CF</span> <b> ' +
                    "{point.name}</b><br/>" +
                    "<b>{point.z}</b>"
            },
            plotOptions: {
                variablepie: {
                    dataLabels: {
                        enabled: false
                    },
                },
            },
            series: [
                {
                    minPointSize: 10,
                    innerSize: "40%",
                    size: "100%",
                    zMin: 0,
                    zMax: 100,
                    name: "countries",
                    borderRadius: 5,
                    data: [
                        { name: "بیمه", y: 100, z: 50 },
                        { name: "سهام", y: 100, z: 40 },
                        { name: "صندوق", y: 100, z: 10 },
                    ],
                    colors: [
                        "#0000ff",
                        "#ff0000",
                        "#00ff00",
                    ],
                    dataLabels: {
                        enabled: true,
                        style: {
                            fontWeight: "normal",
                            color: "#fff",
                            fontFamily: "vazir-light",
                        }
                    },
                    connectors: {
                        enabled: false,
                    },
                    zIndex: 3,
                    showInLegend: true,
                    showInMap: true,
                    cursor: "pointer",
                    events: {
                        legendItemClick: function () {
                            return false;
                        },
                    },
                    point: {
                        events: {
                            click: function () {
                                alert(this.name);
                            },
                        },
                    },
                },
            ],
            legend: {
                layout: "vertical", // Arrange items vertically
                align: "left", // Align legend to the left
                verticalAlign: "middle", // Align legend vertically in the middle
                itemMarginTop: 20,
                itemMarginBottom: 20,
                itemStyle: {
                    fontFamily: "vazir-light",
                    fontSize: "14px",
                    color: "#fff",
                    background: "#fff",
                    padding: 10
                },
                itemHoverStyle: {
                    color: "#f00",
                    background: "#fff",
                }
            },
            credits: {
                enabled: false,
            },
        });
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>Chart</h1>
            <div id="container" style={{ width: "100%", height: "500px" }} />
        </div>
    )
}

export default Chart