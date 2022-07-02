class DomElementConnection {
	public element: any;
	public elementType: string;
	constructor(elementType: string) {
		this.element;
		this.elementType = elementType;
	}
	createConnection() {
		this.element = document.createElement(this.elementType);
	}
}

export default DomElementConnection;