import { DashboardDataFilterBindingTarget } from "../../../Filters/Bindings/DashboardDataFilterBindingTarget";
import { SchemaTypeNames } from "../../Constants/SchemaTypeNames";

export const bindingTargetConverter = (json: any): any => {
    const targetType = json["_type"];
    switch (targetType) {
        case SchemaTypeNames.DataBasedGlobalFilterBindingTargetType:
            return DashboardDataFilterBindingTarget;
        case SchemaTypeNames.DateGlobalFilterBindingTargetType:
            return DashboardDataFilterBindingTarget;
        // case SchemaTypeNames.GlobalVariableBindingTargetType: //todo: finish
        //     return GlobalVariableBindingTargetType;
        default:
            throw new Error(`Binding Target not supported: ${targetType}`); 
    }
}