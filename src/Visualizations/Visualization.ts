import { settingConverter } from "../Core/Serialization/Converters/SettingsConverter";
import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DataDefinitionBase } from "./DataDefinitions/DataDefinitionBase";
import { TabularDataDefinition } from "./DataDefinitions/TabularDataDefinition";
import { BarChartVisualizationSettings } from "./Settings/BarChartVisualizationSettings";
import { VisualizationSettings } from "./Settings/VisualizationSettings";
import { VisualizationBase } from "./VisualizationBase";

export abstract class Visualization<TSettings extends VisualizationSettings, TDataDefinition extends DataDefinitionBase> extends VisualizationBase {

    constructor(title?: string) {
        super(title);
    }

    //todo: implement
    //actionsModel: any | undefined;

    @JsonProperty("DataSpec", { type: TabularDataDefinition }) //todo: need converter
    dataDefinition!: TDataDefinition;

    //todo: implement
    // get filterBindings() {
    //     return this.dataDefinition?.bindings.bindings;
    // }

    @JsonProperty("VisualizationSettings", { converter: settingConverter })
    settings!: TSettings;
}

