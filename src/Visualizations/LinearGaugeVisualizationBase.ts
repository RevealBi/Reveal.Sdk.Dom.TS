import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { GaugeVisualizationSettings } from "./Settings/GaugeVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { LinearGaugeVisualizationDataSpec } from "./VisualizationSpecs/LinearGaugeVisualizationDataSpec";

export abstract class LinearGaugeVisualizationBase<TSettings extends GaugeVisualizationSettings> extends TabularVisualizationBase<TSettings> {  
    
    @JsonProperty("VisualizationDataSpec", { type: LinearGaugeVisualizationDataSpec })
    protected visualizationDataSpec: LinearGaugeVisualizationDataSpec = new LinearGaugeVisualizationDataSpec();

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