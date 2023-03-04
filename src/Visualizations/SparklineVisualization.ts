import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { SparklineVisualizationSettings } from "./Settings/SparklineVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { SparklineVisualizationDataSpec } from "./VisualizationSpecs/SparklineVisualizationDataSpec";

export class SparklineVisualization extends TabularVisualizationBase<SparklineVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new SparklineVisualizationSettings();
        this.settings._visualizationDataSpec = this.visualizationDataSpec; //todo: pass this to the setting ctor
    }

    @JsonProperty("VisualizationDataSpec", { type: SparklineVisualizationDataSpec })
    private visualizationDataSpec: SparklineVisualizationDataSpec = new SparklineVisualizationDataSpec();

    public get date(): DimensionColumn | undefined {
        return this.visualizationDataSpec.date;
    }
    public set date(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.date = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.value;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.value = value;
    }

    public get categories(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set categories(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }
}