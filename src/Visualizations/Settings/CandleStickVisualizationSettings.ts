import { ChartType } from "../Enums/ChartType";
import { FinancialVisualizationSettingsBase } from "./FinancialVisualizationSettingsBase";

export class CandleStickVisualizationSettings extends FinancialVisualizationSettingsBase {
    constructor() {
        super();
        this.chartType = ChartType.Candlestick;
    }
}