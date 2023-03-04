import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";
import { ChartType } from "../Enums/ChartType";
import { TrendlineType } from "../Enums/TrendlineType";
import { ChartVisualizationSettings } from "./ChartVisualizationSettings";

export class RadialVisualizationSettings extends ChartVisualizationSettings {
    constructor() {
        super();
        this.chartType = ChartType.RadialLines;
    }

    /**
     * Gets or sets a trendline to apply to the visualization
     */
    @JsonProperty("TrendlineType")
    trendline: TrendlineType = TrendlineType.None;
}