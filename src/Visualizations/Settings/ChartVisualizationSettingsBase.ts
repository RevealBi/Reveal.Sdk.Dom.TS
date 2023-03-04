import { SchemaTypeNames } from "../../Core/Constants/SchemaTypeNames";
import { VisualizationTypes } from "../../Core/Constants/VisualizationTypes";
import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";
import { ChartType } from "../Enums/ChartType";
import { VisualizationSettings } from "./VisualizationSettings";

export abstract class ChartVisualizationSettingsBase extends VisualizationSettings {
    constructor() {
        super();
        this.schemaTypeName = SchemaTypeNames.ChartVisualizationSettingsType;
        this.visualizationType = VisualizationTypes.CHART;
    }

    /// <summary>
    /// Gets or sets the chart type of the Visualization
    /// </summary>
    @JsonProperty("ChartType")
    protected chartType: ChartType = ChartType.Area;
}