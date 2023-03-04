import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { ScatterMapVisualizationSettings } from "./Settings/ScatterMapVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { ScatterMapVisualizationDataSpec } from "./VisualizationSpecs/ScatterMapVisualizationDataSpec";

export class ScatterMapVisualization extends TabularVisualizationBase<ScatterMapVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new ScatterMapVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: ScatterMapVisualizationDataSpec })
    private visualizationDataSpec: ScatterMapVisualizationDataSpec = new ScatterMapVisualizationDataSpec();

    public get label(): DimensionColumn | undefined {
        return this.visualizationDataSpec.label;
    }
    public set label(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.label = value;
    }

    public get map(): string | undefined {
        return this.settings.region;
    }
    public set map(value: string | undefined) {
        this.settings.region = value;
    }

    public get latitude(): DimensionColumn | undefined {
        return this.visualizationDataSpec.location;
    }
    public set latitude(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.location = value;
    }

    public get longitude(): DimensionColumn | undefined {
        return this.visualizationDataSpec.longitude;
    }
    public set longitude(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.longitude = value;
    }

    public get mapColor(): MeasureColumn[] {
        return this.visualizationDataSpec.mapColor;
    }
    public set mapColor(value: MeasureColumn[]) {
        this.visualizationDataSpec.mapColor = value;
    }

    public get mapColorCategory(): DimensionColumn | undefined {
        return this.visualizationDataSpec.mapColorCategory;
    }
    public set mapColorCategory(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.mapColorCategory = value;
    }

    public get bubbleRadius(): MeasureColumn[] {
        return this.visualizationDataSpec.radius;
    }
    public set bubbleRadius(value: MeasureColumn[]) {
        this.visualizationDataSpec.radius = value;
    }
}