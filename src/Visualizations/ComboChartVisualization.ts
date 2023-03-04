import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataSourceItem } from "../Data/DataSourceItem";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { ComboChartVisualizationSettings } from "./Settings/ComboChartVisualizationSettings";
import { TabularVisualizationBase } from "./TabularVisualizationBase";
import { CompositeChartVisualizationDataSpec } from "./VisualizationSpecs/CompositeChartVisualizationDataSpec";

export class ComboChartVisualization extends TabularVisualizationBase<ComboChartVisualizationSettings> {
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new ComboChartVisualizationSettings();
    }

    @JsonProperty("VisualizationDataSpec", { type: CompositeChartVisualizationDataSpec })
    private visualizationDataSpec: CompositeChartVisualizationDataSpec = new CompositeChartVisualizationDataSpec();

    public get chart1(): MeasureColumn[] {
        return this.visualizationDataSpec.chart1;
    }
    public set chart1(value: MeasureColumn[]) {
        this.visualizationDataSpec.chart1 = value;
    }

    public get chart2(): MeasureColumn[] {
        return this.visualizationDataSpec.chart2;
    }
    public set chart2(value: MeasureColumn[]) {
        this.visualizationDataSpec.chart2 = value;
    }

    public get labels(): DimensionColumn[] {
        return this.visualizationDataSpec.rows;
    }
    public set labels(value: DimensionColumn[]) {
        this.visualizationDataSpec.rows = value;
    }
}