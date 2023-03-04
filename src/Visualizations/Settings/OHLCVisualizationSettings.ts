import { ChartType } from "../Enums/ChartType";
import { FinancialVisualizationSettingsBase } from "./FinancialVisualizationSettingsBase";

export class OHLCVisualizationSettings extends FinancialVisualizationSettingsBase {
    constructor() {
        super();
        this.chartType = ChartType.OHLC;
    }
}