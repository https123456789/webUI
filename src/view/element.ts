import DomElementConnection from "../domconnection/domconnection";
import View from "./view";

class ViewElement {
	public parent: View;
	public dom = new DomElementConnection("div");
	constructor(parent: View) {
		this.parent = parent;
		this.dom.createConnection();
	}
	setBackgroudColor(r: number, g: number, b: number) {
		/*
			Changes the view's background color
		*/
		this.dom.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}
	setChild() {
		while (this.dom.element.firstChild) {
			this.dom.element.removeChild(
				this.dom.element.lastChild
			);
		}
		this.dom.element.appendChild(
			this.parent.child.element.dom.element
		);
	}
}

export default ViewElement;