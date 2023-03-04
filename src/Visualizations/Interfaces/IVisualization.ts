import { DataDefinitionBase } from "../DataDefinitions/DataDefinitionBase";
import { VisualizationSettings } from "../Settings/VisualizationSettings";

//todo: not sure this is needed in typescript
export interface IVisualization {
    id: string;
    title?: string;
    isTitleVisible: boolean;
    columnSpan: number;
    rowSpan: number;
}

export interface IVisualizationBase<TSettings extends VisualizationSettings, TDataSpec extends DataDefinitionBase>
  extends IVisualization {
  dataDefinition: TDataSpec;
  settings: TSettings;
}