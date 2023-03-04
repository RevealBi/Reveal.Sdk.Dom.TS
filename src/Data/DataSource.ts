import { SchemaTypeNames } from "../Core/Constants/SchemaTypeNames";
import { Guid } from "../Core/Guid";
import { SchemaType } from "../Core/SchemaType";

export class DataSource extends SchemaType {
    constructor() {
        super();
        this.schemaTypeName = SchemaTypeNames.DataSourceType;
    }

    id: string = Guid.newGuid();
    provider: string = "";
    //@JsonProperty("Description")
    title: string = "";
    subtitle: string = "";
    properties: Record<string, any> = {}; //todo: double check this
}