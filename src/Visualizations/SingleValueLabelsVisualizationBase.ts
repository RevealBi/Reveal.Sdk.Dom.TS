import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { VisualizationSettings } from "./Settings/VisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { SingleValueLabelsVisualizationDataSpec } from "./VisualizationSpecs/SingleValueLabelsVisualizationDataSpec";

export abstract class SingleValueLabelsVisualizationBase<TSettings extends VisualizationSettings> extends TabularVisualizationBase<TSettings> {
    @JsonProperty("VisualizationDataSpec", { type: SingleValueLabelsVisualizationDataSpec })
    private visualizationDataSpec: SingleValueLabelsVisualizationDataSpec = new SingleValueLabelsVisualizationDataSpec();

    public get labels(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set labels(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.value;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.value = value;
    }
}