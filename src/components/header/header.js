import { ExcelComponent } from "@core/excelComponent";

export class Header extends ExcelComponent {
	static className = "excel__header";
	
	toHTML() {
		return `
			<label>
				<input type="text" class="input" placeholder="Новая таблица"/>
			</label>
				
			<div>
				<button class="button">
					<i class="material-icons">delete</i>
				</button>
				
				<button class="button">
					<i class="material-icons">exit_to_app</i>
				</button>
			</div>
		`;
	}
}