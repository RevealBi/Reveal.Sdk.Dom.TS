import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { BarChartVisualizationSettings } from "./Settings/BarChartVisualizationSettings";

export class BarChartVisualization extends CategoryVisualizationBase<BarChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new BarChartVisualizationSettings();
    }
}