import { GlobalConstants } from "./Core/Constants/GlobalConstants";
import { VisualizationConverter } from "./Core/Serialization/Converters/VisualizationConverter";
import { JsonProperty } from "./Core/Serialization/Decorators/JsonProperty";
import { RdashSerializer } from "./Core/Serialization/RdashSerializer";
import { DashboardFilter } from "./Filters/DashboardFilter";
import { IVisualization } from "./Visualizations/Interfaces/IVisualization";

export class RdashDocument {
    // Creates a new instance of an `RdashDocument`.
    constructor()
    constructor(title: string)
    constructor(title?: string) {
        this.title = title || "New Dashboard";
    }

    // Gets or sets the title of the dashboard.
    @JsonProperty("Title")
    title: string;

    // Gets or sets the description of the dashboard.
    @JsonProperty("Description")
    description?: string;

    // Gets or sets the name of the theme the dashboard will apply to all visualizations.
    // @JsonProperty("ThemeName")
    // @JsonConverter(typeof(StringEnumConverter))
    // Theme: Theme = Theme.Mountain;

    // Gets the name of the API that created the .rdash file.
    @JsonProperty("CreatedWith")
    createdWith: string = GlobalConstants.createdWith;

    // Gets the name of the API that last saved the .rdash file.
    @JsonProperty("SavedWith")
    savedWith?: string;

    @JsonProperty("FormatVersion")
    formatVersion: number = 6;

    // Gets or sets whether the viewer displaying the dashboard will automatically layout visualizations, or use an absolute layout controlled by each visualization's ColumnSpan and RowSpan properties. True by default.
    useAutoLayout: boolean = true;

    @JsonProperty("Tags")
    tags?: string;

    // Gets the collection of data sources available for creating visualizations.
    // @JsonProperty
    // readonly DataSources: DataSource[] = [];

    // Gets the collection of dashboard filters that can bound to any visualization using the visualization's FilterBindings property.
    //@JsonProperty("GlobalFilters", { type: DashboardFilter })
    //filters: DashboardFilter[] = [];

    // TODO: implement
    // @JsonProperty
    // GlobalVariables: GlobalVariable[] = [];

    // Gets the collection of visualizations that are displayed in the dashboard.
    @JsonProperty("Widgets", { converter: VisualizationConverter })
    visualizations: IVisualization[] = [];

    static async load(filePath: string): Promise<RdashDocument | null> {
        return await RdashSerializer.load(filePath);
    }
}