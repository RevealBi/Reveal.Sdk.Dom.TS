import { DataSourceItem } from "../Data/DataSourceItem";
import { VisualizationFilter } from "../Filters/VisualizationFilter";
import { TabularDataDefinition } from "./DataDefinitions/TabularDataDefinition";
import { VisualizationSettings } from "./Settings/VisualizationSettings";
import { Visualization } from "./Visualization";

export abstract class TabularVisualizationBase<TSettings extends VisualizationSettings> extends Visualization<TSettings, TabularDataDefinition> {

    constructor(title: string, dataSourceItem: DataSourceItem){
        super(title);
        this.dataDefinition = new TabularDataDefinition();
        this.dataDefinition.dataSourceItem = dataSourceItem;
        
        //todo: copy fields into this property, maybe object.assign will work
        //this.dataDefinition.fields = dataSourceItem.fields.clone()
    }
    
    get filters(): VisualizationFilter[] {
        return this.dataDefinition.quickFilters;
    }
}