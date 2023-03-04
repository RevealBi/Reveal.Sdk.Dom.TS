import { DataSourceItem } from "../Data/DataSourceItem";
import { FinancialVisualizationBase } from "./FinancialVisualizationBase";
import { CandleStickVisualizationSettings } from "./Settings/CandleStickVisualizationSettings";

export class CandleStickVisualization extends FinancialVisualizationBase<CandleStickVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new CandleStickVisualizationSettings();
    }
}