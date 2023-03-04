import { ChartType } from "../Enums/ChartType";
import { CategoryChartVisualizationSettings } from "./CategoryChartVisualizationSettings";

export class StepLineChartVisualizationSettings extends CategoryChartVisualizationSettings {
    constructor() {
        super();
        this.chartType = ChartType.StepLine;
    }
}