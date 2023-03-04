import { DataSourceItem } from "../Data/DataSourceItem";
import { TextVisualizationSettings } from "./Settings/TextVisualizationSettings";
import { SingleGaugeVisualizationBase } from "./SingleGaugeVisualizationBase";

export class TextVisualization extends SingleGaugeVisualizationBase<TextVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new TextVisualizationSettings();
    }
}