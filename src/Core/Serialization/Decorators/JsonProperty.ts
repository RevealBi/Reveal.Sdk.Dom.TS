import { Reflection } from '../Utilities/Reflection';
import { JsonPropertyOptions } from '../Interfaces/JsonPropertyOptions';

export function JsonProperty(): any
export function JsonProperty(name: string): any
export function JsonProperty(name: string, options: JsonPropertyOptions): any
export function JsonProperty(name?: string, options?: JsonPropertyOptions) {
    return (target: any, key: string) => {
        Reflection.setJsonPropertyName(name || key, target, key);  

        //todo: revist and see if this is neccessary
        const type = Reflection.getPropertyType(target, key);
        options = options || { type: type }
        Reflection.setJsonPropertyOptions(options, target, key); 
    };
}


