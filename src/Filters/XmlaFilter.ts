import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataType } from "../Enums/DataType";
import { XmlaElementType } from "./Enums/XmlaElementType";
import { IFilter } from "./Interfaces/IFilter";

export class XmlaFilter
{
    @JsonProperty("Filter") //todo: need IFilter converter
    filter?: IFilter;
    
    @JsonProperty("UniqueName")
    uniqueName?: string;
    
    @JsonProperty("DataType")
    dataType: DataType = DataType.String;

    @JsonProperty("IsDynamic")
    isDynamic: boolean = false;
    
    @JsonProperty("ElementType")
    elementType: XmlaElementType = XmlaElementType.Dimension;
}