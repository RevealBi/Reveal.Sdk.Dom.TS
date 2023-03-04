import { Reflection } from "./Utilities/Reflection";
import 'reflect-metadata';
import { JsonRecord } from "./Interfaces/JsonRecord";
import { BarChartVisualizationSettings } from "../../Visualizations/Settings/BarChartVisualizationSettings";

export class JsonConvert {

    static deserialize<T>(json: string, type: new () => T | T): T {
        const object = JSON.parse(json);
        return this.deserializeObject(object, type);
    }

    private static deserializeObject<T>(jsonObject: Record<string, any>, type: new () => T | T): T {
        const instance: any = new type();
        const propertyKeys = Reflection.getPropertyKeys(type.prototype);

        for (const [key, jsonName] of propertyKeys) {
            if (jsonObject.hasOwnProperty(jsonName)) {
                const value = jsonObject[jsonName];
                const propertyOptions = Reflection.getJsonPropertyOptions(instance, key);

                if (propertyOptions && propertyOptions.type) {
                    type = propertyOptions.type;
                }

                if (this.isJsonRecord(type)) {
                    instance[key] = Array.isArray(value) ? value.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {}) : value;
                } else if (Array.isArray(value)) {
                    instance[key] = value.map(item => {

                        if (propertyOptions && propertyOptions.converter) {
                            type = propertyOptions.converter(item)
                        }

                        return this.deserializeObject(item, type)
                    });
                } else if (typeof value === "object") {

                    if (propertyOptions && propertyOptions.converter) {
                        type = propertyOptions.converter(value)
                    }

                    instance[key] = this.deserializeObject(value, type);
                } else {
                    instance[key] = value;
                }
            }
        }

        return instance;
    }

    static isJsonRecord(value: any): value is JsonRecord {
        return value == JsonRecord;
    }

    static serialize(value: object) {
        const jsonObject = this.serializeObject(value);
        return JSON.stringify(jsonObject, undefined, 4);
    }

    private static serializeObject(instance: any): Record<string, any> {
        const json: Record<string, any> = {};
        const propertyKeys = Reflection.getPropertyKeys(instance);
        for (const [key, jsonName] of propertyKeys) {
            if (jsonName) {
                const value = instance[key];
                if (Array.isArray(value)) {
                    json[jsonName] = value.map(item => this.serializeObject(item));
                } else if (typeof value === "object") {
                    json[jsonName] = this.serializeObject(value);
                } else {
                    json[jsonName] = value;
                }
            }
        }
        return json;
    }
}