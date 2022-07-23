import DomElementConnection from "../domconnection/domconnection";
import GenericComponent from "./genericComponent";

class GenericComponentElement {
    public parent: any;
    public dom: DomElementConnection;
    constructor(parent: any, htmlElementType: string = "div") {
        this.dom = new DomElementConnection(htmlElementType);
        this.parent = parent;
        this.dom.createConnection();
    }
    setBackgroudColor(r: number, g: number, b: number) {
		/*
			Changes the element's background color
		*/
		this.dom.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}
}

export default GenericComponentElement;