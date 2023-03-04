import { DataSourceItem } from "../Data/DataSourceItem";
import { CategoryVisualizationBase } from "./CategoryVisualizationBase";
import { TimeSeriesVisualizationSettings } from "./Settings/TimeSeriesVisualizationSettings";

export class TimeSeriesVisualization extends CategoryVisualizationBase<TimeSeriesVisualizationSettings> {
    
    constructor(title: string, dataSourceItem: DataSourceItem) {
        super(title, dataSourceItem)
        this.settings = new TimeSeriesVisualizationSettings();
    }

    //todo: implement

    // [JsonProperty(Order = 7)]
    // TimeSeriesVisualizationDataSpec VisualizationDataSpec { get; set; } = new TimeSeriesVisualizationDataSpec();

    // [JsonIgnore]
    // public List<MeasureColumn> Values { get { return VisualizationDataSpec.Values; } }

    // [JsonIgnore]
    // public DimensionColumn Category
    // {
    //     get { return VisualizationDataSpec.Category; }
    //     set { VisualizationDataSpec.Category = value; }
    // }

    // [JsonIgnore]
    // public DimensionColumn Date
    // {
    //     get
    //     {
    //         if (VisualizationDataSpec.Rows.Count > 0)
    //             return VisualizationDataSpec.Rows[0];
    //         else 
    //             return null;
    //     }
    //     set
    //     {
    //         VisualizationDataSpec.Rows.Clear();
    //         VisualizationDataSpec.Rows.Add(value);
    //     }
    // }
}