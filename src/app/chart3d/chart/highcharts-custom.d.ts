// highcharts-custom.d.ts
import * as Highcharts from "highcharts";

declare module "highcharts" {
    interface Chart {
        customText?: Highcharts.SVGElement;
    }
}