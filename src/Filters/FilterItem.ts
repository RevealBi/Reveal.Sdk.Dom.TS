import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";

export class FilterItem {

    //todo: i'm not sure what the data type should be. maybe fieldValues?: { [key: string]: any }
    //todo: so I need to add the type in the decorator too?
    @JsonProperty("FieldValues")
    fieldValues?: Record<string, any>;

    @JsonProperty("ExpansionPath")
    expansionPath: string[] = [];
}