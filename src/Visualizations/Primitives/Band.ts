import { SchemaType } from "../../Core/SchemaType"
import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";
import { BandColor } from "../Enums/BandColor";
import { ValueComparisonType } from "../Enums/ValueComparisonType";

export class Band extends SchemaType
{
    @JsonProperty("Color")
    color: BandColor  = BandColor.Green;    

    @JsonProperty("Value")
    value?: number;

    //internal
    @JsonProperty("ValueComparisonType")
    valueComparisonType: ValueComparisonType = ValueComparisonType.Percentage;
}