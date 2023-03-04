import { RdashSerializer } from "../src";
import { DataSourceItem } from "../src/Data/DataSourceItem";
import { DashboardDataFilter } from "../src/Filters/DashboardDataFilter";
import { RdashDocument } from "../src/RdashDocument";
import { BarChartVisualization } from "../src/Visualizations/BarChartVisualization";
import { CategoryVisualizationBase } from "../src/Visualizations/CategoryVisualizationBase";
import { Maps } from "../src/Visualizations/Constants/Maps";
import { NumberDataField } from "../src/Visualizations/Primitives/NumberDataField";
import { TextBoxVisualization } from "../src/Visualizations/TextBoxVisualization";
import { VisualizationBase } from "../src/Visualizations/VisualizationBase";

// const document = new RdashDocument("My New Dashboard");

// const barChart = new BarChartVisualization("My Bar Chart", new DataSourceItem());

// document.visualizations = [
//     barChart,
// ]

// const result = await RdashSerializer.serialize(document);
// console.log(result);


const loadedDoc = await RdashDocument.load("samples/dashboards/sales.rdash");
console.log(loadedDoc);

// const bc = loadedDoc?.visualizations[5] as BarChartVisualization;
// console.log(bc.dataDefinition);
