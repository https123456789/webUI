import ViewElement from "./element";
import Application from "../application/application";

class View {
	public application;
	public element: ViewElement;
	public child: any;
	constructor(application: Application) {
		this.application = application;
		this.element = new ViewElement(this);
	}
	setBackground(r: number, g: number, b: number) {
		/*
			Sets the background of the view
		*/
		this.element.setBackgroudColor(r, g, b);
	}
	setChild(child: any) {
		this.child = child;
		this.element.setChild();
	}
	hasBeenAddedToApplication(event: any) {
		/*
			Triggered when the view is added to an application
		*/
		console.log("Added to app!");
	}
}

export default View;