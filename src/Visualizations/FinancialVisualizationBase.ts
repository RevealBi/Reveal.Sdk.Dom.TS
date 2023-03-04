import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { FinancialVisualizationSettingsBase } from "./Settings/FinancialVisualizationSettingsBase";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { FinancialVisualizationDataSpec } from "./VisualizationSpecs/FinancialVisualizationDataSpec";

export abstract class FinancialVisualizationBase<TSettings extends FinancialVisualizationSettingsBase> extends TabularVisualizationBase<TSettings> {

    @JsonProperty("VisualizationDataSpec", { type: FinancialVisualizationDataSpec })
    private visualizationDataSpec: FinancialVisualizationDataSpec = new FinancialVisualizationDataSpec();

    public get labels(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set labels(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }

    public get opens(): MeasureColumn[] {
        return this.visualizationDataSpec.open;
    }
    public set opens(value: MeasureColumn[]) {
        this.visualizationDataSpec.open = value;
    }

    public get highs(): MeasureColumn[] {
        return this.visualizationDataSpec.high;
    }
    public set highs(value: MeasureColumn[]) {
        this.visualizationDataSpec.high = value;
    }

    public get lows(): MeasureColumn[] {
        return this.visualizationDataSpec.low;
    }
    public set lows(value: MeasureColumn[]) {
        this.visualizationDataSpec.low = value;
    }

    public get closes(): MeasureColumn[] {
        return this.visualizationDataSpec.close;
    }
    public set closes(value: MeasureColumn[]) {
        this.visualizationDataSpec.close = value;
    }
}