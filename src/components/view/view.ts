import ViewElement from "./element";
import Application from "../application/application";
import GenericComponent from "../genericComponent/genericComponent";

class View extends GenericComponent {
	public child: any;
	constructor(application: Application) {
		super(application, ViewElement);
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