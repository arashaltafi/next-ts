"use client"

import React, { useLayoutEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//npm i @amcharts/amcharts4
const Chart3d = () => {
    useLayoutEffect(() => {
        // Apply theme
        am4core.useTheme(am4themes_animated);

        // Create chart
        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        // chart.legend = new am4charts.Legend();

        // Add data
        chart.data = [
            { country: "Lithuania", litres: 501.9 },
            { country: "Czech Republic", litres: 301.9 },
            { country: "Ireland", litres: 201.1 },
            { country: "Germany", litres: 165.8 },
            { country: "Australia", litres: 139.9 },
            { country: "Austria", litres: 128.3 },
            { country: "UK", litres: 99 },
            { country: "Belgium", litres: 60 },
            { country: "The Netherlands", litres: 50 },
        ];

        // Inner radius for donut chart
        chart.innerRadius = am4core.percent(40);

        // Create series
        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.category = "country";

        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <div className='w-full bg-gray-500 min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>Chart3d</h1>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
        </div>
    )
}

export default Chart3d