import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { KpiTimeVisualizationSettings } from "./Settings/KpiTimeVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { IndicatorVisualizationDataSpec } from "./VisualizationSpecs/IndicatorVisualizationDataSpec";

export class KpiTimeVisualization extends TabularVisualizationBase<KpiTimeVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new KpiTimeVisualizationSettings();
        this.settings._visualizationDataSpec = this.visualizationDataSpec; //todo: pass this into the settings ctor
    }

    @JsonProperty("VisualizationDataSpec", { type: IndicatorVisualizationDataSpec })
    private visualizationDataSpec: IndicatorVisualizationDataSpec = new IndicatorVisualizationDataSpec();

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