import { ChartType } from "../Enums/ChartType";
import { CategoryChartVisualizationSettings } from "./CategoryChartVisualizationSettings";

export class BarChartVisualizationSettings extends CategoryChartVisualizationSettings {
    constructor() {
        super();
        this.chartType = ChartType.Bar;
    }
}