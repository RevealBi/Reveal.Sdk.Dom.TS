import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";
import { IDimensionDataField } from "../Interfaces/IDimensionDataField";
import { DataField } from "./DataField";

export abstract class DimensionDataField extends DataField implements IDimensionDataField
{
    constructor(fieldName?: string) {
        super(fieldName);
    }
    
    @JsonProperty("DrillDownElements")
    drillDownElements: string[] = [];

    //used to visually expand hierachy in the vizualization, only used by the pivot grid
    @JsonProperty("ExpandedItems")
    expandedItems: string[] = [];

    @JsonProperty("sortByField")
    sortByField?: string;
}