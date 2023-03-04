import { TextBoxDataDefinition } from "./DataDefinitions/TextBoxDataDefinition";
import { Alignment } from "./Enums/Alignment";
import { FontSize } from "./Enums/FontSize";
import { TextBoxVisualizationSettings } from "./Settings/TextBoxVisualizationSettings";
import { Visualization } from "./Visualization";

export class TextBoxVisualization extends Visualization<TextBoxVisualizationSettings, TextBoxDataDefinition>  {

    constructor()
    constructor(title: string)
    constructor(title?: string) {
        super(title);

        this.dataDefinition = new TextBoxDataDefinition();
        this.dataDefinition.bindings = undefined;
        this.settings = new TextBoxVisualizationSettings();
    }

    get alignment(): Alignment {
        return this.dataDefinition.alignment;
    }

    set alignment(value: Alignment) {
        this.dataDefinition.alignment = value;
    }

    get fontSize(): FontSize {
        return this.dataDefinition.fontSize;
    }

    set fontSize(value: FontSize) {
        this.dataDefinition.fontSize = value;
    }

    get text(): string {
        return this.dataDefinition.text;
    }

    set text(value: string) {
        this.dataDefinition.text = value;
    }
}