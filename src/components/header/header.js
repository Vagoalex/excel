import { ExcelComponent } from "@core/excelComponent";

export class Header extends ExcelComponent {
	toHTML() {
		return `<h1>Header</h1>`;
	}
}