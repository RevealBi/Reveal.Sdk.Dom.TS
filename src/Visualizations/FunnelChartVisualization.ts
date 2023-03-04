import { DataSourceItem } from "../Data/DataSourceItem";
import { FunnelChartVisualizationSettings } from "./Settings/FunnelChartVisualizationSettings";
import { SingleValueLabelsVisualizationBase } from "./SingleValueLabelsVisualizationBase";

export class FunnelChartVisualization extends SingleValueLabelsVisualizationBase<FunnelChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new FunnelChartVisualizationSettings();
    }
}