import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";

export class AdHocExpandedElement
{
    @JsonProperty("Path")
    path?: string[];
}