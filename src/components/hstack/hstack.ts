import Stack from "../stack/stack";

class HStack extends Stack {
	public parent: any;
	constructor(parent: any) {
		super(parent);
	}
}

export default HStack;