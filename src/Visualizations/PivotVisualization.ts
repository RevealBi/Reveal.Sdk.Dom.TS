import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { PivotVisualizationSettings } from "./Settings/PivotVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { PivotVisualizationDataSpec } from "./VisualizationSpecs/PivotVisualizationDataSpec";

export class PivotVisualization extends TabularVisualizationBase<PivotVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new PivotVisualizationSettings();

        //this is a workaround because the json schemea has this property on the VisualizationDataSpec and not on the VisualizationSettings where it belongs
        this.settings._visualizationDataSpec = this.visualizationDataSpec;
    }

    @JsonProperty("VisualizationDataSpec", { type: PivotVisualizationDataSpec })
    private visualizationDataSpec: PivotVisualizationDataSpec = new PivotVisualizationDataSpec();

    public get columns(): DimensionColumn[] {
        return this.visualizationDataSpec.columns;
    }
    public set columns(value: DimensionColumn[]) {
        this.visualizationDataSpec.columns = value;
    }

    public get rows(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set rows(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.values;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.values = value;
    }
}