import { JsonProperty } from "../Core/Serialization/Decorators/JsonProperty";
import { DimensionColumn } from "./Primitives/DimensionColumn";
import { VisualizationSettings } from "./Settings/VisualizationSettings"
import { TabularVisualizationBase } from "./TabularVisualizationBase"
import { CategoryVisualizationDataSpec } from "./VisualizationSpecs/CategoryVisualizationDataSpec";

export abstract class CategoryVisualizationBase<TSettings extends VisualizationSettings> extends TabularVisualizationBase<TSettings>
    {
        @JsonProperty("VisualizationDataSpec", { type: CategoryVisualizationDataSpec })
        private visualizationDataSpec: CategoryVisualizationDataSpec = new CategoryVisualizationDataSpec();
        
        //todo: should I expose gets and sets for the web DOM?
        get labels() {
            return this.visualizationDataSpec.rows;
        }
        // set labels(labels: DimensionColumn[]) {
        //     this.visualizationDataSpec.rows = labels;
        // }

        get category(): DimensionColumn | undefined {
            return this.visualizationDataSpec.category;
        }

        set category(value: DimensionColumn | undefined) {
            this.visualizationDataSpec.category = value;
        }

        get values() {
            return this.visualizationDataSpec.values;
        }
    }