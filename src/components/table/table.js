import { ExcelComponent } from "@core/excelComponent";

export class Table extends ExcelComponent {
	toHTML() {
		return `<h1>Table</h1>`;
	}
}