import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { TabularColumn } from "./Primitives/TabularColumn";
import { GridVisualizationSettings } from "./Settings/GridVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { GridVisualizationDataSpec } from "./VisualizationSpecs/GridVisualizationDataSpec";

export class GridVisualization extends TabularVisualizationBase<GridVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new GridVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: GridVisualizationDataSpec })
    private visualizationDataSpec: GridVisualizationDataSpec = new GridVisualizationDataSpec();

    public get columns(): TabularColumn[] {
        return this.visualizationDataSpec.columns;
    }
    public set columns(value: TabularColumn[]) {
        this.visualizationDataSpec.columns = value;
    }
}