import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { LineChartVisualizationSettings } from "./Settings/LineChartVisualizationSettings";

export class LineChartVisualization extends CategoryVisualizationBase<LineChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new LineChartVisualizationSettings();
    }
}