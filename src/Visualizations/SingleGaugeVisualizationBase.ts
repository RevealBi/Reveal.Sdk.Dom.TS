import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { VisualizationSettings } from "./Settings/VisualizationSettings"
import { TabularVisualizationBase } from "./TabularVisualizationBase"
import { SingleGaugeVisualizationDataSpec } from "./VisualizationSpecs/SingleGaugeVisualizationDataSpec";

export abstract class SingleGaugeVisualizationBase<TSettings extends VisualizationSettings> extends TabularVisualizationBase<TSettings> {

    public get label(): DimensionColumn | undefined {
        return this.visualizationDataSpec.label;
    }
    public set label(value: DimensionColumn | undefined) {
        this.visualizationDataSpec.label = value;
    }

    public get values(): MeasureColumn[] {
        return this.visualizationDataSpec.value;
    }
    public set values(value: MeasureColumn[]) {
        this.visualizationDataSpec.value = value;
    }

    @JsonProperty("VisualizationDataSpec", { type: SingleGaugeVisualizationDataSpec })
    private visualizationDataSpec: SingleGaugeVisualizationDataSpec = new SingleGaugeVisualizationDataSpec();
}