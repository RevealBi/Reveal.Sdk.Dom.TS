import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { StepAreaChartVisualizationSettings } from "./Settings/StepAreaChartVisualizationSettings";

export class StepAreaChartVisualization extends CategoryVisualizationBase<StepAreaChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new StepAreaChartVisualizationSettings();
    }
}