import { DataSourceItem } from "../Data/DataSourceItem";
import { LinearGaugeVisualizationBase } from "./LinearGaugeVisualizationBase";
import { MeasureColumn } from "./Primitives/MeasureColumn";
import { BulletGraphVisualizationSettings } from "./Settings/BulletGraphVisualizationSettings";

export class BulletGraphVisualization extends LinearGaugeVisualizationBase<BulletGraphVisualizationSettings> {
    
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new BulletGraphVisualizationSettings();
    }
    
    public get targets(): MeasureColumn[] {
        return this.visualizationDataSpec.target;
    }
    public set targets(value: MeasureColumn[]) {
        this.visualizationDataSpec.target = value;
    }
}