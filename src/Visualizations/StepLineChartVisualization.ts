import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { StepLineChartVisualizationSettings } from "./Settings/StepLineChartVisualizationSettings";

export class StepLineChartVisualization extends CategoryVisualizationBase<StepLineChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new StepLineChartVisualizationSettings();
    }
}