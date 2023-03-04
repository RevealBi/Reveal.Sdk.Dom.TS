import { SchemaTypeNames } from "../Core/Constants/SchemaTypeNames";
import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DateRange } from "../Primitives/DateRange";
import { DashboardFilter } from "./DashboardFilter";
import { DateRuleType } from "./Enums/DateRuleType";

export class DashboardDateFilter extends DashboardFilter
{
    @JsonProperty("CustomDateRange")
    customDateRange?: DateRange;

    @JsonProperty("IncludeToday")
    includeToday: boolean = true;

    @JsonProperty("RuleType")
    ruleType: DateRuleType = DateRuleType.LastYear;

    constructor()
    {
        super();
        this.schemaTypeName = SchemaTypeNames.DateGlobalFilterType;
        this.title = "Date Filter";
    }
}