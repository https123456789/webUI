import DomElementConnection from "../domconnection/domconnection";

class LabelElement {
	public parent: any;
	public dom: DomElementConnection;
	constructor(parent: any) {
		this.parent = parent;
		this.dom = new DomElementConnection("p");
		this.dom.createConnection();
	}
}

export default LabelElement;