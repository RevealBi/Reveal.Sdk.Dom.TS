import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { StackedAreaChartVisualizationSettings } from "./Settings/StackedAreaChartVisualizationSettings";

export class StackedAreaChartVisualization extends CategoryVisualizationBase<StackedAreaChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new StackedAreaChartVisualizationSettings();
    }
}