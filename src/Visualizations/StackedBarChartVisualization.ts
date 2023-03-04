import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { StackedBarChartVisualizationSettings } from "./Settings/StackedBarChartVisualizationSettings";

export class StackedBarChartVisualization extends CategoryVisualizationBase<StackedBarChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new StackedBarChartVisualizationSettings();
    }
}