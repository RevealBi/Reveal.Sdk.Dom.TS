import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { CustomVisualizationSettings } from "./Settings/CustomVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { PivotVisualizationDataSpec } from "./VisualizationSpecs/PivotVisualizationDataSpec";

export class CustomVisualization extends TabularVisualizationBase<CustomVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new CustomVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: PivotVisualizationDataSpec })
    private visualizationDataSpec: PivotVisualizationDataSpec = new PivotVisualizationDataSpec();

    public get rows(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set rows(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get columns(): DimensionColumn[] {
        return this.visualizationDataSpec.columns;
    }
    public set columns(value: DimensionColumn[]) {
        this.visualizationDataSpec.columns = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.values;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.values = value;
    }    

    public get url() : string | undefined {
        return this.settings.url;
    }
    public set url(value : string | undefined) {
        this.settings.url = value;
    }
}