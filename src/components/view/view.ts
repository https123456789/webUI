import ViewElement from "./element";
import Application from "../application/application";

class View {
	public application: Application;
	public child: any;
	public element: ViewElement;
	constructor(application: Application) {
		this.application = application;
		this.element = new ViewElement(this);
		this.element.dom.element.classList.add("view");
	}
	setBackground(r: number, g: number, b: number) {
		this.element.setBackgroudColor(r, g, b);
	}
	setChild(child: any) {
		this.child = child;
		this.element.setChild();
	}
}

export default View;