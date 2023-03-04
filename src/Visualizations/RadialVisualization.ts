import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { RadialVisualizationSettings } from "./Settings/RadialVisualizationSettings";

export class RadialVisualization extends CategoryVisualizationBase<RadialVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new RadialVisualizationSettings();
    }
}