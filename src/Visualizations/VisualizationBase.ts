import { Guid } from "../Core/Guid";
import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { IVisualization } from "./Interfaces/IVisualization";


export abstract class VisualizationBase implements IVisualization {

    constructor(title?: string) {
        this.title = title;
    }

    @JsonProperty("Id")
    id: string = Guid.newGuid();

    @JsonProperty("Title")
    title?: string;

    @JsonProperty("IsTitleVisible")
    isTitleVisible: boolean = true;

    @JsonProperty("ColumnSpan")
    columnSpan: number = 0;

    @JsonProperty("RowSpan")
    rowSpan: number = 0;
}
