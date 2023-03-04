import { ChartType } from "../Enums/ChartType";
import { RoundChartVisualizationSettingsBase } from "./RoundChartVisualizationSettingsBase";

export class PieChartVisualizationSettings extends RoundChartVisualizationSettingsBase {
    constructor() {
        super();
        this.chartType = ChartType.Pie;
    }
}