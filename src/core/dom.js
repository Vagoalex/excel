﻿class Dom {
	constructor(selector) {
		this.$el = typeof selector === "string" ? document.querySelector(selector) : selector;
	}
	
	// innerHTML
	html(html) {
		if(typeof html === "string") {
			this.$el.innerHTML = html;
			return this;
		}
		
		return this.$el.outerHTML.trim();
	}
	
	clear() {
		this.html("");
		return this;
	}
	
	// addEventListener
	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback);
	}
	
	// appendChild
	append(node) {
		if(node instanceof Dom) {
			node = node.$el;
		}
		
		if(Element.prototype.append) {
			this.$el.append(node);
		} else {
			this.$el.appendChild(node);
		}
		
		return this;
	}
}

export function $dom(selector) {
	return new Dom(selector);
}

// createElement
$dom.create = (tagName, classes = "") => {
	const el = document.createElement(tagName);
	
	if(classes) {
		el.classList.add(classes);
	}
	
	return $dom(el);
};