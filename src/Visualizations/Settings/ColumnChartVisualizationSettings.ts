import { ChartType } from "../Enums/ChartType";
import { CategoryChartVisualizationSettings } from "./CategoryChartVisualizationSettings";

export class ColumnChartVisualizationSettings extends CategoryChartVisualizationSettings {
    constructor() {
        super();
        this.chartType = ChartType.Column;
    }
}