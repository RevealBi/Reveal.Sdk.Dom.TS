import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { ColumnChartVisualizationSettings } from "./Settings/ColumnChartVisualizationSettings";

export class ColumnChartVisualization extends CategoryVisualizationBase<ColumnChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new ColumnChartVisualizationSettings();
    }
}