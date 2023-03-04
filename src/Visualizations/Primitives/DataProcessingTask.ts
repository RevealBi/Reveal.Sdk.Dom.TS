import { DataProcessingInputField } from "./DataProcessingInputField";
import { DataProcessingOutputField } from "./DataProcessingOutputField";

export class DataProcessingTask
{
    InputFields: DataProcessingInputField[] = [];
    OutputFields: DataProcessingOutputField[] = [];
    Parameters: Record<string, any> = {};
}