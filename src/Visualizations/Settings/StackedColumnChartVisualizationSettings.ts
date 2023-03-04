import { ChartType } from "../Enums/ChartType";
import { StackedVisualizationSettingsBase } from "./StackedVisualizationSettingsBase";

export class StackedColumnChartVisualizationSettings extends StackedVisualizationSettingsBase {
    constructor() {
        super();
        this.chartType = ChartType.StackedColumn;
    }
}