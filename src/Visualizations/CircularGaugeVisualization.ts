import { DataSourceItem } from "../Data/DataSourceItem";
import { CircularGaugeVisualizationSettings } from "./Settings/CircularGaugeVisualizationSettings";
import { SingleGaugeVisualizationBase } from "./SingleGaugeVisualizationBase";

export class CircularGaugeVisualization extends SingleGaugeVisualizationBase<CircularGaugeVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new CircularGaugeVisualizationSettings();
    }
}