import LabelElement from "./element";

class Label {
	public parent: any;
	public text: string;
	public element: LabelElement;
	constructor(parent: any, text: string) {
		this.parent = parent;
		this.element = new LabelElement(this);
		this.text = text;
		this.element.dom.element.innerHTML = this.text;
	}
}

export default Label;