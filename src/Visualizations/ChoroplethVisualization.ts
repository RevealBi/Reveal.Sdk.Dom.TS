import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { ChoroplethVisualizationSettings } from "./Settings/ChoroplethVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { ChoroplethVisualizationDataSpec } from "./VisualizationSpecs/ChoroplethVisualizationDataSpec";

export class ChoroplethVisualization extends TabularVisualizationBase<ChoroplethVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new ChoroplethVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: ChoroplethVisualizationDataSpec })
    private visualizationDataSpec: ChoroplethVisualizationDataSpec = new ChoroplethVisualizationDataSpec();

    public get map(): string | undefined {
        return this.settings.region;
    }
    public set map(value: string | undefined) {
        this.settings.region = value;
    }

    public get locations(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set locations(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get mapColor(): DimensionColumn | undefined {
        return this.visualizationDataSpec.mapColor;
    }
    public set mapColor(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.mapColor = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.value;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.value = value;
    }    
}