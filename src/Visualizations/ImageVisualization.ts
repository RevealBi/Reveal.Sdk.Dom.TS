import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { TabularColumn } from "./Primitives/TabularColumn";
import { AssetVisualizationSettings } from "./Settings/AssetVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { AssetVisualizationDataSpec } from "./VisualizationSpecs/AssetVisualizationDataSpec";

export class ImageVisualization extends TabularVisualizationBase<AssetVisualizationSettings> {

    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new AssetVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: AssetVisualizationDataSpec })
    private visualizationDataSpec: AssetVisualizationDataSpec = new AssetVisualizationDataSpec();

    public get url(): TabularColumn | undefined{
        return this.visualizationDataSpec.urlColumn;
    }
    public set url(value: TabularColumn | undefined) {
        this.visualizationDataSpec.urlColumn = value;
    }
}