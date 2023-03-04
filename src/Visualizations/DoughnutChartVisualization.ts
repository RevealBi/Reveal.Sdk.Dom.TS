import { DataSourceItem } from "../Data/DataSourceItem";
import { DoughnutChartVisualizationSettings } from "./Settings/DoughnutChartVisualizationSettings";
import { SingleValueLabelsVisualizationBase } from "./SingleValueLabelsVisualizationBase";

export class DoughnutChartVisualization extends SingleValueLabelsVisualizationBase<DoughnutChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new DoughnutChartVisualizationSettings();
    }
}