import { ExcelComponent } from "@core/excelComponent";

export class Formula extends ExcelComponent {
	static className = "excel__formula";
	
	toHTML() {
		return `
			<div class="formula-info">fx</div>
			
			<div class="formula-input">
				<label>
					<input type="text" class="input" placeholder=""/>
				</label>
			</div>
		`;
	}
}