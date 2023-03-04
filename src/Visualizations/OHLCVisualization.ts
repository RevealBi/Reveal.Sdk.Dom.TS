import { DataSourceItem } from "../Data/DataSourceItem";
import { FinancialVisualizationBase } from "./FinancialVisualizationBase";
import { OHLCVisualizationSettings } from "./Settings/OHLCVisualizationSettings";

export class OHLCVisualization extends FinancialVisualizationBase<OHLCVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new OHLCVisualizationSettings();
    }
}