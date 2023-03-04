import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { ScatterVisualizationSettings } from "./Settings/ScatterVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { ScatterVisualizationDataSpec } from "./VisualizationSpecs/ScatterVisualizationDataSpec";

export class ScatterVisualization extends TabularVisualizationBase<ScatterVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new ScatterVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: ScatterVisualizationDataSpec })
    private visualizationDataSpec: ScatterVisualizationDataSpec = new ScatterVisualizationDataSpec();

    public get labels(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set labels(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get xAxes(): MeasureColumn[] {
        return this.visualizationDataSpec.xAxis;
    }
    public set xAxes(value: MeasureColumn[]) {
        this.visualizationDataSpec.xAxis = value;
    }

    public get yAxes(): MeasureColumn[] {
        return this.visualizationDataSpec.yAxis;
    }
    public set yAxes(value: MeasureColumn[]) {
        this.visualizationDataSpec.yAxis = value;
    }
}