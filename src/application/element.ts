import DomElementConnection from "../domconnection/domconnection";
import View from "../view/view";

class ApplicationElement {
	public parent: any;
	public dom: DomElementConnection = new DomElementConnection("div");
	public element: any;
	constructor(parent: any) {
		this.parent = parent;
		this.dom.createConnection();
	}
	add() {
		//this.initStyles();
		document.body.prepend(this.dom.element);
	}
	initStyles() {
		/*
			Apply default style
		*/
		this.element.style.backgroundColor = "rgb(0, 0, 0)";
		this.element.style.color = "rgb(255, 255, 255)";
		this.element.style.width = "100%";
		this.element.style.height = "100%";
		console.log("Styles initalized.");
	}
	addView(view: View) {
		this.dom.element.appendChild(
			view.element.dom.element
		);
		//this.dom.addChild();
	}
}

export default ApplicationElement;