import { ExcelComponent } from "@core/excelComponent";

export class Formula extends ExcelComponent {
	static className = "excel__formula";
	
	constructor($root) {
		super($root, {
			name: "Formula",
			listeners: ["input", "click"]
		});
	}
	
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
	
	onInput(event) {
		console.log("Formula: onInput", event.target.value)
	}
	
	onClick(event) {
		console.log("Formula: onClick", event.target.value)
	}
}