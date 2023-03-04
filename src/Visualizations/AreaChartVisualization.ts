import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { AreaChartVisualizationSettings } from "./Settings/AreaChartVisualizationSettings";

export class AreaChartVisualization extends CategoryVisualizationBase<AreaChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new AreaChartVisualizationSettings();
    }
}