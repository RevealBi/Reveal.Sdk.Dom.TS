import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { SplineChartVisualizationSettings } from "./Settings/SplineChartVisualizationSettings";

export class SplineChartVisualization extends CategoryVisualizationBase<SplineChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new SplineChartVisualizationSettings();
    }
}