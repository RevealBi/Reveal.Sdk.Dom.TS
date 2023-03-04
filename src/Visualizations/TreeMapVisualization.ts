import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { TreeMapVisualizationSettings } from "./Settings/TreeMapVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { TreeMapVisualizationDataSpec } from "./VisualizationSpecs/TreeMapVisualizationDataSpec";

export class TreeMapVisualization extends TabularVisualizationBase<TreeMapVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new TreeMapVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: TreeMapVisualizationDataSpec })
    private visualizationDataSpec: TreeMapVisualizationDataSpec = new TreeMapVisualizationDataSpec();

    public get labels(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set lables(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.value;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.value = value;
    }
}