import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";
import { DataDefinitionBase } from "../DataDefinitions/DataDefinitionBase";
import { JoinCondition } from "./JoinCondition";

export class AdditionalTable
{
    @JsonProperty("Alias")
    alias?: string;
    @JsonProperty("DataSpec")
    dataSpec?: DataDefinitionBase;
    @JsonProperty("JoinConditions")
    joinConditions: JoinCondition[] = [];
}