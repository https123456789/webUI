import StackElement from "../stack/element";
import VStack from "./vstack";

class VStackElement extends StackElement {
	constructor(parent: VStack) {
		super(parent);
	}
}

export default VStackElement