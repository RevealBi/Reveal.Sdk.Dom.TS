import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { BubbleVisualizationSettings } from "./Settings/BubbleVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { BubbleVisualizationDataSpec } from "./VisualizationSpecs/BubbleVisualizationDataSpec";

export class BubbleVisualization extends TabularVisualizationBase<BubbleVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new BubbleVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: BubbleVisualizationDataSpec })
    private visualizationDataSpec: BubbleVisualizationDataSpec = new BubbleVisualizationDataSpec();

    public get labels(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set labels(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get xAxis(): MeasureColumn[] {
        return this.visualizationDataSpec.xAxis;
    }
    public set xAxis(value: MeasureColumn[]) {
        this.visualizationDataSpec.xAxis = value;
    }

    public get yAxis(): MeasureColumn[] {
        return this.visualizationDataSpec.yAxis;
    }
    public set yAxis(value: MeasureColumn[]) {
        this.visualizationDataSpec.yAxis = value;
    }

    public get radius(): MeasureColumn[] {
        return this.visualizationDataSpec.radius;
    }
    public set radius(value: MeasureColumn[]) {
        this.visualizationDataSpec.radius = value;
    }    
}