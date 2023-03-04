import { SchemaTypeNames } from "../../Core/Constants/SchemaTypeNames";
import { JsonProperty } from "../../Core/Serialization/Decorators/JsonProperty";
import { ColumnBase } from "./ColumnBase";
import { NumberDataField } from "./NumberDataField";
import { XmlaMeasure } from "./XmlaMeasure";

export class MeasureColumn extends ColumnBase
{
    constructor()
    constructor(dataField: NumberDataField)
    constructor(dataField?: NumberDataField) {
        super();
        this.schemaTypeName = SchemaTypeNames.MeasureColumnSpecType;
        this.dataField = dataField || new NumberDataField();
    }

    /**
     * Gets or sets the <see cref="DataField"/>.
     */
    @JsonProperty("SummarizationField")
    dataField: NumberDataField;

    @JsonProperty("XmlaMeasure")
    private xmlaMeasure: XmlaMeasure | null = null;
}