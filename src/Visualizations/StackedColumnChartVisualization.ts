import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { StackedColumnChartVisualizationSettings } from "./Settings/StackedColumnChartVisualizationSettings";

export class StackedColumnChartVisualization extends CategoryVisualizationBase<StackedColumnChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new StackedColumnChartVisualizationSettings();
    }
}