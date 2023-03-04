import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { SplineAreaChartVisualizationSettings } from "./Settings/SplineAreaChartVisualizationSettings";

export class SplineAreaChartVisualization extends CategoryVisualizationBase<SplineAreaChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new SplineAreaChartVisualizationSettings();
    }
}