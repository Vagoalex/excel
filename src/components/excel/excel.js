import { $dom } from "@core/dom";

export class Excel {
	className = "excel";
	
	constructor(selector, options) {
		this.$el = $dom(selector);
		this.components = options?.components || [];
	}
	
	getRoot() {
		const $root = $dom.create("div", this.className);
		
		this.components.forEach(Component => {
			const $el = $dom.create("div", Component.className);
			
			const component = new Component($el);
			
			$el.html(component.toHTML());
			$root.append($el);
		});
		
		return $root;
	}
	
	render() {
		this.$el.append(this.getRoot());
	}
}