import { RdashDocument } from "../../RdashDocument";
import jsZip from "jszip";
import * as fs from "fs";
import { JsonConvert } from "./JsonConvert";

export class RdashSerializer {
    static _rdashJsonFileName = "Dashboard.json";

    static async load(filePath: string): Promise<RdashDocument> {
        let document: RdashDocument | null = null;
        const stream = fs.readFileSync(filePath);
        document = await this.deserialize(stream);
        return document;
    }

    static async deserialize(stream: any): Promise<RdashDocument> {
        let json: string = await this.deserializeToJson(stream);
        const doc = JsonConvert.deserialize(json, RdashDocument);
        return doc;
    }

    static async deserializeToJson(stream: any): Promise<string> {
        let json: string = "";
        const zip = await jsZip.loadAsync(stream);
        const result = await zip.file(this._rdashJsonFileName)?.async("string");        
        if (result){
            json = result.toString();        
        }            
        return json;
    }

    static serialize(document: RdashDocument) {
        //todo: fix document
        //const json: string = JSON.stringify(document, null, "\t");
        const json = JsonConvert.serialize(document);
        return json;
    }

    static async save(document: RdashDocument, filePath: string) {
        document.savedWith = "Reveal.Sdk.DOM";

        const json = this.serialize(document);
        const zip = new jsZip();
        zip.file(this._rdashJsonFileName, json);

        const generatedZip = await zip.generateAsync({ type: "nodebuffer" });
        fs.writeFileSync(filePath, generatedZip);
    }
}