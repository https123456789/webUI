import StackElement from "./element";
import View from "../view/view";
import HStack from "../hstack/hstack";
import VStack from "../vstack/vstack";

class Stack {
	public parent: Stack | View | HStack | VStack;
	public element: StackElement;
	public children: any[];
	constructor(parent: any) {
		this.parent = parent;
		this.element = new StackElement(this);
		this.children = [];
		this.updateDOM();
	}
	addChild(child: any) {
		this.children.push(child);
		this.updateDOM();
	}
	updateDOM() {
		this.element.clearContents();
		for (var i: number = 0; i < this.children.length; i++) {
			this.element.addChild(this.children[i]);
		}
	}
}

export default Stack;