import { ExcelComponent } from "@core/excelComponent";

export class Table extends ExcelComponent {
	static className = "excel__table";
	
	toHTML() {
		return `
			<div class="row">
				<div class="row-info"></div>
				
				<div class="row-data">
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
					<div class="column">
						A
					</div>
					<div class="column">
						B
					</div>
					<div class="column">
						C
					</div>
				
				</div>
			</div>
			
			<div class="row">
				<div class="row-info">
					1
				</div>
				
				<div class="row-data">
					<div class="cell selected" contenteditable="true">content1</div>
					<div class="cell" contenteditable="true">content2</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
					<div class="cell" contenteditable="true">content3</div>
				</div>
			</div>
			
			<div class="row">
				<div class="row-info">
					2
				</div>
				
				<div class="row-data">
					<div class="cell" contenteditable="true">2content1</div>
					<div class="cell" contenteditable="true">2content2</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
					<div class="cell" contenteditable="true">2content3</div>
				</div>
			</div>
			
			<div class="row">
				<div class="row-info">
					3
				</div>
				<div class="cell" contenteditable="true">2content1</div>
			</div>
			
			<div class="row">
				<div class="row-info">
					4
				</div>
				<div class="cell" contenteditable="true">2content1</div>
			</div>
		`;
	}
}