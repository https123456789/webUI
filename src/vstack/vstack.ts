import Stack from "../stack/stack";
import VStackElement from "./element";

class VStack extends Stack {
	public parent: any;
	public element: VStackElement;
	constructor(parent: any) {
		super(parent);
		this.element = new VStackElement(this);
	}
}

export default VStack;