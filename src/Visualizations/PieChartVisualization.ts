import { DataSourceItem } from "../Data/DataSourceItem";
import { PieChartVisualizationSettings } from "./Settings/PieChartVisualizationSettings";
import { SingleValueLabelsVisualizationBase } from "./SingleValueLabelsVisualizationBase";

export class PieChartVisualization extends SingleValueLabelsVisualizationBase<PieChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new PieChartVisualizationSettings();
    }
}