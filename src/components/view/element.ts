import View from "./view";
import GenericComponentElement from "../genericComponent/element";

class ViewElement extends GenericComponentElement {
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
	show() {
		this.dom.element.style.display = "block";
	}
	hide() {
		this.dom.element.style.display = "none";
	}
}

export default ViewElement;