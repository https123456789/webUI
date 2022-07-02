import DomElementConnection from "../domconnection/domconnection";
import Stack from "./stack";

class StackElement {
	public parent: Stack;
	public dom: DomElementConnection;
	constructor(parent: Stack) {
		this.parent = parent;
		this.dom = new DomElementConnection("div");
		this.dom.createConnection();
		this.dom.element.style.display = "flex";
		this.dom.element.style.flexDirection = "column";
		this.dom.element.style.flex = 1;
	}
	clearContents() {
		while(this.dom.element.firstChild) {
			this.dom.element.removeChild(
				this.dom.element.lastChild
			);
		}
	}
	addChild(child: any) {
		this.dom.element.appendChild(child.elemtn.dom.element);
	}
}

export default StackElement;