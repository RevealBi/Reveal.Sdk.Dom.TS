import { DashboardDataFilterBinding } from "../../../Filters/Bindings/DashboardDataFilterBinding";
import { DashboardDateFilterBinding } from "../../../Filters/Bindings/DashboardDateFilterBinding";
import { SchemaTypeNames } from "../../Constants/SchemaTypeNames";

export const bindingConverter = (json: any): any => {
    const target = json["Target"];
    const bindingType = target["_type"];

    switch (bindingType) {
        case SchemaTypeNames.DataBasedGlobalFilterBindingTargetType:
            return DashboardDataFilterBinding;
        case SchemaTypeNames.DateGlobalFilterBindingTargetType:
            return DashboardDateFilterBinding;
        default:
            throw new Error(`Binding not supported: ${bindingType}`); 
    }
}