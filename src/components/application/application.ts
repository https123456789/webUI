import {
	isA
} from "../../global/typing";
import ApplicationElement from "./element";
import View from "../view/view";
import ViewElement from "../view/element";
import WrongTypeError from "../../errors/WrongTypeError";

// Defaults
import DefaultView from "../../defaults/defaultView";

class Application {
	/**
	 * Represents an application
	 */
	public element: ApplicationElement;
	public initView: View = new DefaultView(this);
	public views: View[] = [];
	public activeView: View = this.initView;
	constructor() {
		this.element = new ApplicationElement(this);
		this.element.dom.element.classList.add("application");
		this.initView.hide();
	}
	run() {
		this._init();
	}
	_init() {
		/**
		 * Initializes the application
		 * 
		 * This inlcludes adding the element to the DOM
		 * 
		 * @throws {@link Error | An error if no views are present}
		 */
		// Check if init view is set
		if (!this.initView) {
			var e = new Error();
			if (this.initView == undefined) {
				e.message = "Cannot run instance of WebUI.Application because instance property initView has not been set.";
			} else {
				e.message = `Cannot run instance of WebUI.Application because instance property initView is null.`;
			}
			throw e;
		}
		// Add element
		this.element.add();
	}
	setInitView(view: View) {
		/*
			Sets the first view that appears when the app finishes init.
		*/
		if (!isA(view, View)) {
			var e = new WrongTypeError("WebUI.Application.setInitView", "WebUI.View", view);
			throw e;
		}
		this.initView = view;
		this.views.push(view);
		this.element.addView(view);
		console.log(`Application initView set to ${view}`);
	}
	addView(view: View) {
		/*
			Adds a view to the app
		*/
		if (!isA(view, View)) {
			var e = new WrongTypeError("WebUI.Application.setInitView", "WebUI.View", view);
			throw e;
		}
		if (!isA(view.element, ViewElement)) {
			var e = new TypeError();
			e.message = `WebUI.Application.addView only accepts instances of type WebUI.View, with property 'element' that is an instance of WebUI.ViewElement. Recived object with 'element' property: ${view.element} of class ${view.element.constructor.name}`;
			throw e;
		}
		if (this.views.length < 1) {
			this.setInitView(view);
			return;
		}
		// Make sure view is not visible
		view.hide();
		// Add view
		this.views.push(view);
		this.element.addView(view);
		console.log("Added view " + view);
	}
	setView(id: number) {
		if (id > this.views.length) {
			let e = new ReferenceError("Id is greater than views in application");
			throw e;
		}
		// Hide current view
		this.activeView.hide();
		// Assign and show new view
		this.activeView = this.views[id];
		this.activeView.show();
	}
}

export default Application;