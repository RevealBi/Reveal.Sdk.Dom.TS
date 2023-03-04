import { ChartType } from "../Enums/ChartType";
import { StackedVisualizationSettingsBase } from "./StackedVisualizationSettingsBase";

export class StackedAreaChartVisualizationSettings extends StackedVisualizationSettingsBase {
    constructor() {
        super();
        this.chartType = ChartType.StackedArea;
    }
}