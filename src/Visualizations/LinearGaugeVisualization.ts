import { DataSourceItem } from "../Data/DataSourceItem";
import { LinearGaugeVisualizationBase } from "./LinearGaugeVisualizationBase"
import { LinearGaugeVisualizationSettings } from "./Settings/LinearGaugeVisualizationSettings";

export class LinearGaugeVisualization extends LinearGaugeVisualizationBase<LinearGaugeVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new LinearGaugeVisualizationSettings();
    }
}