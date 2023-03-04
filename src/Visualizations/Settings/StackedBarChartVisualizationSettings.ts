import { ChartType } from "../Enums/ChartType";
import { StackedVisualizationSettingsBase } from "./StackedVisualizationSettingsBase";

export class StackedBarChartVisualizationSettings extends StackedVisualizationSettingsBase {
    constructor() {
        super();
        this.chartType = ChartType.StackedBar;
    }
}